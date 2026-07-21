#!/usr/bin/env node
// Builds a JSON manifest of {name, category, svg} for the docs site,
// consumed as a static asset (no build step needed for the demo page).
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { optimize } from "svgo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../../..");
const SRC_DIR = path.join(ROOT, "packages/icons-svg/src");
const OUT_FILE = path.join(ROOT, "apps/docs/icons-data.json");

function toPascalCase(str) {
  return str.split(/[-_ ]/g).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

const svgoConfig = {
  multipass: true,
  plugins: [
    { name: "preset-default", params: { overrides: { removeViewBox: false, convertPathData: { floatPrecision: 2 } } } },
    "removeDimensions", "removeXMLNS",
    { name: "removeAttrs", params: { attrs: "(data-name|id)" } },
  ],
};

const categories = readdirSync(SRC_DIR).filter(f => statSync(path.join(SRC_DIR, f)).isDirectory());
const icons = [];

for (const category of categories) {
  const dir = path.join(SRC_DIR, category);
  for (const file of readdirSync(dir).filter(f => f.endsWith(".svg"))) {
    const baseName = file.replace(/\.svg$/, "");
    const raw = readFileSync(path.join(dir, file), "utf8");
    const optimized = optimize(raw, { ...svgoConfig, path: file }).data;
    icons.push({
      component: `Bi${toPascalCase(baseName)}`,
      slug: baseName,
      category,
      svg: optimized,
    });
  }
}

icons.sort((a, b) => a.component.localeCompare(b.component));
writeFileSync(OUT_FILE, JSON.stringify(icons));
console.log(`Docs data: wrote ${icons.length} icons to apps/docs/icons-data.json`);
