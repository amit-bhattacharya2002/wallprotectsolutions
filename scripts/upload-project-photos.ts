/**
 * Compress and upload project photos to Vercel Blob.
 *
 * Usage:
 *   npm run upload-photos -- ~/Desktop/Frp_ProjectPhotos/Katsuya
 *   npm run upload-photos -- ~/Desktop/Frp_ProjectPhotos/Katsuya --cover photo.jpg
 *   npm run upload-all-photos -- ~/Desktop/Frp_ProjectPhotos
 */

import { readFile, readdir, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";
import sharp from "sharp";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"]);
const MAX_WIDTH = 2000;
const WEBP_QUALITY = 80;

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryData {
  cover: string;
  images: GalleryImage[];
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function loadEnvLocal() {
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    const content = await readFile(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // optional
  }
}

function altFromFilename(filename: string, projectTitle: string): string {
  const base = path.basename(filename, path.extname(filename));
  const cleaned = base
    .replace(/^CSP_FRP_/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned ? `${projectTitle} — ${cleaned}` : projectTitle;
}

async function compressToWebp(filePath: string): Promise<Buffer> {
  return sharp(filePath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();
}

async function uploadBuffer(
  blobPath: string,
  buffer: Buffer,
  token: string
): Promise<string> {
  const result = await put(blobPath, buffer, {
    access: "public",
    token,
    contentType: "image/webp",
    addRandomSuffix: false,
  });
  return result.url;
}

export async function regenerateGalleryIndex(galleryDir: string, slugs: string[]) {
  const imports = slugs
    .map((_, i) => `import gallery${i} from "./${slugs[i]}.json";\n`)
    .join("");

  const entries = slugs
    .map((slug, i) => `  "${slug}": gallery${i} as ProjectGalleryData,`)
    .join("\n");

  const content = `import type { ProjectGalleryData } from "./types";

${imports}
const galleries: Record<string, ProjectGalleryData> = {
${entries}
};

export function getProjectGallery(slug: string): ProjectGalleryData | null {
  return galleries[slug] ?? null;
}

export function getProjectGalleryImages(slug: string) {
  return getProjectGallery(slug)?.images ?? [];
}
`;

  await writeFile(path.join(galleryDir, "index.ts"), content, "utf8");
}

export interface UploadProjectOptions {
  folderPath: string;
  title?: string;
  slug?: string;
  coverFilename?: string;
  skipIfExists?: boolean;
}

async function collectImageFiles(folder: string): Promise<{ filePath: string; filename: string }[]> {
  const results: { filePath: string; filename: string }[] = [];

  async function walk(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
        results.push({ filePath: fullPath, filename: entry.name });
      }
    }
  }

  await walk(folder);
  return results.sort((a, b) =>
    a.filename.localeCompare(b.filename, undefined, { numeric: true })
  );
}

export async function uploadProjectFolder(
  options: UploadProjectOptions
): Promise<GalleryData | null> {
  await loadEnvLocal();

  const folder = path.resolve(options.folderPath);
  const title = options.title ?? path.basename(folder);
  const slug = options.slug ?? slugify(title);
  const token = process.env.BLOB_READ_WRITE_TOKEN;

  if (!token) {
    throw new Error("Missing BLOB_READ_WRITE_TOKEN in .env.local or environment.");
  }

  const galleryDir = path.join(process.cwd(), "app/data/galleries");
  const jsonPath = path.join(galleryDir, `${slug}.json`);

  if (options.skipIfExists) {
    try {
      await access(jsonPath);
      console.log(`Skipping "${title}" — gallery already exists at ${jsonPath}`);
      const existing = JSON.parse(await readFile(jsonPath, "utf8")) as GalleryData;
      return existing;
    } catch {
      // continue upload
    }
  }

  const imageFiles = await collectImageFiles(folder);

  if (imageFiles.length === 0) {
    console.warn(`No images found in ${folder} — skipping`);
    return null;
  }

  console.log(`\nUploading ${imageFiles.length} photos for "${title}" (${slug})`);

  const images: GalleryImage[] = [];
  let coverUrl = "";

  for (let i = 0; i < imageFiles.length; i++) {
    const { filePath, filename: file } = imageFiles[i];
    const index = String(i + 1).padStart(3, "0");
    const blobName = `${index}.webp`;
    const blobPath = `projects/${slug}/${blobName}`;

    process.stdout.write(`[${i + 1}/${imageFiles.length}] ${file} → ${blobName} ... `);

    const buffer = await compressToWebp(filePath);
    const url = await uploadBuffer(blobPath, buffer, token);
    const alt = altFromFilename(file, title);

    images.push({ src: url, alt });
    console.log(`done (${(buffer.length / 1024).toFixed(0)} KB)`);

    const isCover =
      (options.coverFilename && file === options.coverFilename) ||
      (!options.coverFilename && i === 0);

    if (isCover) {
      process.stdout.write(`  cover upload ... `);
      coverUrl = await uploadBuffer(`projects/${slug}/cover.webp`, buffer, token);
      console.log("done");
    }
  }

  if (!coverUrl) {
    const firstBuffer = await compressToWebp(imageFiles[0].filePath);
    coverUrl = await uploadBuffer(`projects/${slug}/cover.webp`, firstBuffer, token);
  }

  const galleryData: GalleryData = { cover: coverUrl, images };

  await mkdir(galleryDir, { recursive: true });
  await writeFile(jsonPath, JSON.stringify(galleryData, null, 2) + "\n", "utf8");

  const existingJson = (await readdir(galleryDir))
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""))
    .sort();

  await regenerateGalleryIndex(galleryDir, existingJson);

  const manifestBuffer = Buffer.from(JSON.stringify(galleryData, null, 2));
  await put(`projects/${slug}/manifest.json`, manifestBuffer, {
    access: "public",
    token,
    contentType: "application/json",
    addRandomSuffix: false,
  });

  console.log(`✓ "${title}" complete — cover: ${coverUrl}`);
  return galleryData;
}

async function main() {
  const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  const coverFlagIndex = process.argv.indexOf("--cover");
  const coverFilename =
    coverFlagIndex !== -1 ? process.argv[coverFlagIndex + 1] : undefined;
  const skipIfExists = process.argv.includes("--skip-existing");

  const folderArg = args[0];
  if (!folderArg) {
    console.error("Usage: npm run upload-photos -- <folder> [--cover filename.jpg] [--skip-existing]");
    process.exit(1);
  }

  await uploadProjectFolder({
    folderPath: folderArg,
    coverFilename,
    skipIfExists,
  });
}

if (process.argv[1]?.includes("upload-project-photos.ts")) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
