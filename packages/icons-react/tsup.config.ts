import { defineConfig } from "tsup";
import { globSync } from "node:fs";
import path from "node:path";

// Every icon becomes its own entry point so bundlers can tree-shake
// down to exactly the icons a consumer imports — critical once this
// library grows to thousands of icons.
const iconEntries = globSync("src/icons/*.tsx").reduce<Record<string, string>>((acc, file) => {
  const name = path.basename(file, ".tsx");
  acc[`icons/${name}`] = file;
  return acc;
}, {});

export default defineConfig({
  entry: { index: "src/index.ts", ...iconEntries },
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: true,
  external: ["react"],
});
