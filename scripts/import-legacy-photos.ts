/**
 * Pull gallery photos from the live WordPress site into empty legacy projects.
 *
 * Usage:
 *   npm run import-legacy-photos -- --dry-run
 *   npm run import-legacy-photos
 *   npm run import-legacy-photos -- --slug crunch-fitness
 *   npm run import-legacy-photos -- --download-only
 *
 * Old-site URLs live at /project/:slug/. Three slugs were renamed on this
 * site; the rest match 1:1. Full-size lightbox files (-scaled.jpg) are used,
 * not the 530×350 thumbnails.
 */

import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { legacyProjects } from "../app/data/legacy-projects";
import {
  loadEnvLocal,
  uploadProjectFolder,
} from "./upload-project-photos";

const OLD_SITE = "https://www.frpinstallations.com";
const USER_AGENT = "FRPInstall-photo-import/1.0";

/** New slug → WordPress /project/:slug/ when they differ. */
const OLD_SLUG_BY_NEW: Record<string, string> = {
  "bc-hops-co-stainless-steel-paneling-kiln-room": "bc-hops-co",
  "ross-place-retirement-residence": "ross-place-retirement",
};

function argValue(flag: string): string | undefined {
  const i = process.argv.indexOf(flag);
  return i !== -1 ? process.argv[i + 1] : undefined;
}

function hasFlag(flag: string): boolean {
  return process.argv.includes(flag);
}

function canonicalKey(url: string): string {
  let name = url.split("/").pop() ?? url;
  try {
    name = decodeURIComponent(name);
  } catch {
    // keep raw
  }
  return name
    .replace(/-scaled(?=\.[^.]+$)/i, "")
    .replace(/-\d+x\d+(?=\.[^.]+$)/i, "")
    .toLowerCase();
}

function uniqueUrls(urls: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const url of urls) {
    const key = canonicalKey(url);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(url);
  }
  return out;
}

function extractGalleryUrls(html: string): string[] {
  const lightbox: string[] = [];
  const re =
    /<a\s[^>]*href="(https:\/\/www\.frpinstallations\.com\/wp-content\/uploads\/[^"]+)"[^>]*data-lightbox="project"|data-lightbox="project"[^>]*href="(https:\/\/www\.frpinstallations\.com\/wp-content\/uploads\/[^"]+)"/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    lightbox.push(match[1] || match[2]);
  }

  const og: string[] = [];
  const ogRe =
    /property="og:image"\s+content="([^"]+)"|content="([^"]+)"\s+property="og:image"/gi;
  while ((match = ogRe.exec(html))) {
    const url = match[1] || match[2];
    if (
      url &&
      /wp-content\/uploads/i.test(url) &&
      /\.(jpe?g|png|webp)(\?|$)/i.test(url)
    ) {
      og.push(url);
    }
  }

  return uniqueUrls([...og, ...lightbox]);
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT, Accept: "text/html" },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${url}`);
  }
  return res.text();
}

async function downloadFile(url: string, dest: string): Promise<void> {
  const res = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
    redirect: "follow",
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} for ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
}

function filenameFor(url: string, index: number): string {
  let name = url.split("/").pop() ?? `image-${index}.jpg`;
  try {
    name = decodeURIComponent(name);
  } catch {
    // keep raw
  }
  name = name.replace(/[^\w.-]+/g, "-");
  const pad = String(index).padStart(3, "0");
  return `${pad}-${name}`;
}

async function setCoverInFile(
  filePath: string,
  slug: string,
  coverUrl: string
): Promise<boolean> {
  const { readFile } = await import("node:fs/promises");
  let src = await readFile(filePath, "utf8");
  const slugMarker = `slug: "${slug}"`;
  const start = src.indexOf(slugMarker);
  if (start === -1) return false;
  const imageKey = src.indexOf("image:", start);
  if (imageKey === -1) return false;
  const valueStart = src.indexOf('"', imageKey + 6) + 1;
  const valueEnd = src.indexOf('"', valueStart);
  if (valueStart <= 0 || valueEnd === -1) return false;
  src = src.slice(0, valueStart) + coverUrl + src.slice(valueEnd);
  await writeFile(filePath, src, "utf8");
  return true;
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await loadEnvLocal();

  const dryRun = hasFlag("--dry-run");
  const downloadOnly = hasFlag("--download-only");
  const onlySlug = argValue("--slug");
  const destRoot = path.resolve(
    argValue("--out") ??
      path.join(
        process.env.HOME ?? "",
        "Desktop/Frp_ProjectPhotos/_from-old-site"
      )
  );

  const galleryDir = path.join(process.cwd(), "app/data/galleries");

  const targets = legacyProjects.filter((p) => {
    if (onlySlug && p.slug !== onlySlug) return false;
    return true;
  });

  if (targets.length === 0) {
    console.error(onlySlug ? `No legacy project matching --slug ${onlySlug}` : "No legacy projects found.");
    process.exit(1);
  }

  console.log(
    `${dryRun ? "Dry run: " : ""}Checking ${targets.length} legacy project(s) on ${OLD_SITE}\n`
  );

  type Plan = {
    slug: string;
    title: string;
    oldSlug: string;
    urls: string[];
    skipReason?: string;
  };

  const plans: Plan[] = [];

  for (const project of targets) {
    const jsonPath = path.join(galleryDir, `${project.slug}.json`);
    if (await fileExists(jsonPath)) {
      plans.push({
        slug: project.slug,
        title: project.title,
        oldSlug: OLD_SLUG_BY_NEW[project.slug] ?? project.slug,
        urls: [],
        skipReason: "gallery JSON already exists",
      });
      continue;
    }

    const oldSlug = OLD_SLUG_BY_NEW[project.slug] ?? project.slug;
    const pageUrl = `${OLD_SITE}/project/${oldSlug}/`;
    process.stdout.write(`${project.slug} … `);
    try {
      const html = await fetchText(pageUrl);
      const urls = extractGalleryUrls(html);
      console.log(`${urls.length} photo(s)`);
      plans.push({
        slug: project.slug,
        title: project.title,
        oldSlug,
        urls,
        skipReason: urls.length === 0 ? "no gallery or featured image on old site" : undefined,
      });
    } catch (err) {
      console.log("FAILED");
      plans.push({
        slug: project.slug,
        title: project.title,
        oldSlug,
        urls: [],
        skipReason: err instanceof Error ? err.message : String(err),
      });
    }
  }

  const toImport = plans.filter((p) => p.urls.length > 0 && !p.skipReason);
  const skipped = plans.filter((p) => p.skipReason);

  console.log("\n── Plan ──");
  for (const p of plans) {
    if (p.skipReason) {
      console.log(`  skip  ${p.slug}  (${p.skipReason})`);
    } else {
      console.log(`  ${String(p.urls.length).padStart(3)}  ${p.slug}`);
    }
  }
  console.log(
    `\nImport ${toImport.length} projects, ${toImport.reduce((n, p) => n + p.urls.length, 0)} photos. Skip ${skipped.length}.`
  );

  if (dryRun) return;

  await mkdir(destRoot, { recursive: true });

  for (const plan of toImport) {
    const folder = path.join(destRoot, plan.slug);
    await mkdir(folder, { recursive: true });
    console.log(`\nDownloading ${plan.urls.length} → ${folder}`);
    for (let i = 0; i < plan.urls.length; i++) {
      const url = plan.urls[i];
      const dest = path.join(folder, filenameFor(url, i + 1));
      if (await fileExists(dest)) {
        console.log(`  [${i + 1}/${plan.urls.length}] exists ${path.basename(dest)}`);
        continue;
      }
      process.stdout.write(`  [${i + 1}/${plan.urls.length}] ${url.split("/").pop()} … `);
      try {
        await downloadFile(url, dest);
        console.log("ok");
      } catch (err) {
        console.log(err instanceof Error ? err.message : String(err));
      }
    }

    if (downloadOnly) continue;

    const gallery = await uploadProjectFolder({
      folderPath: folder,
      title: plan.title,
      slug: plan.slug,
      skipIfExists: true,
    });

    if (gallery?.cover) {
      const legacyPath = path.join(process.cwd(), "app/data/legacy-projects.ts");
      const projectsPath = path.join(process.cwd(), "app/data/projects.ts");
      await setCoverInFile(legacyPath, plan.slug, gallery.cover);
      await setCoverInFile(projectsPath, plan.slug, gallery.cover);
    }
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
