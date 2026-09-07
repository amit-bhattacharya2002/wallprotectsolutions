import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const galleryDir = path.join(root, "app/data/galleries");
const projectFiles = [
  path.join(root, "app/data/projects.ts"),
  path.join(root, "app/data/legacy-projects.ts"),
];

const covers = {};
for (const file of (await readdir(galleryDir)).filter((f) => f.endsWith(".json"))) {
  const slug = file.replace(".json", "");
  const data = JSON.parse(await readFile(path.join(galleryDir, file), "utf8"));
  covers[slug] = data.cover;
}

function applyCovers(src) {
  for (const [slug, cover] of Object.entries(covers)) {
    const slugMarker = `slug: "${slug}"`;
    const start = src.indexOf(slugMarker);
    if (start === -1) continue;
    const imageKey = src.indexOf("image:", start);
    if (imageKey === -1) continue;
    const valueStart = src.indexOf('"', imageKey + 6) + 1;
    const valueEnd = src.indexOf('"', valueStart);
    src = src.slice(0, valueStart) + cover + src.slice(valueEnd);
  }
  return src;
}

for (const filePath of projectFiles) {
  const src = applyCovers(await readFile(filePath, "utf8"));
  await writeFile(filePath, src);
  console.log(`Synced cover URLs into ${path.relative(root, filePath)}`);
}
