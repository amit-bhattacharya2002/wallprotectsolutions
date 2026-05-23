import path from "node:path";
import { readdir } from "node:fs/promises";
import { loadEnvLocal, uploadProjectFolder } from "./upload-project-photos";

async function main() {
  await loadEnvLocal();

  const parentDir = path.resolve(
    process.argv[2] ?? path.join(process.env.HOME ?? "", "Desktop/Frp_ProjectPhotos")
  );

  const entries = await readdir(parentDir, { withFileTypes: true });
  const folders = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("."))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b));

  console.log(`Found ${folders.length} project folders in ${parentDir}`);

  for (const name of folders) {
    await uploadProjectFolder({
      folderPath: path.join(parentDir, name),
      title: name,
      skipIfExists: true,
    });
  }

  console.log("\nAll uploads finished.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
