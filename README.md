# ⚡ Blitz Icons

**Lightning-fast icons for modern developers.**
2,000–10,000+ beautifully crafted, futuristic icons designed by Blitz.

Created by **Blitz** · Community: [@blitz_core](https://t.me/blitz_core) on Telegram

> This repository ships an initial seed set of **87 original icons** across 10 categories, plus the full production pipeline used to scale the library to thousands more. See [ROADMAP.md](./ROADMAP.md) for what's next.

---

## Why Blitz Icons

Every other major icon set — Lucide, Heroicons, Tabler, Feather, Phosphor, Remix, Font Awesome, and the rest — is either purely utilitarian or borrows heavily from the same handful of visual conventions. Blitz Icons is built around a distinct geometric language: **smooth rounded corners, precise 24×24 optical alignment, and a signature diagonal "speed cut"** on container-shaped icons (files, folders, cards) — subtle nods to motion and speed without leaning on lightning-bolt clichés.

Every icon is 100% original artwork, built from primitives (paths, circles, rects) rather than traced or adapted from any existing library.

## Install

```bash
npm install blitz-icons
```

## Usage

```tsx
import { BiHome, BiSearch, BiRocket } from "blitz-icons";

function App() {
  return (
    <>
      <BiHome />
      <BiSearch size={32} />
      <BiRocket color="#6D5BFF" strokeWidth={1.5} />
    </>
  );
}
```

Every icon component supports:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number \| string` | `24` | Width & height |
| `color` | `string` | `currentColor` | Stroke/fill color |
| `strokeWidth` | `number \| string` | `1.75` | Stroke thickness |
| `absoluteStrokeWidth` | `boolean` | `false` | Keep stroke visually constant across sizes |
| `className` | `string` | — | Passed through to `<svg>` |
| `style` | `CSSProperties` | — | Passed through to `<svg>` |
| `title` | `string` | — | Adds an accessible `<title>` + `aria-label` |
| `ref` | — | — | Forwarded to the underlying `<svg>` element |

All standard `SVGProps` (`onClick`, `data-*`, etc.) are also accepted and spread onto the root `<svg>`.

## Monorepo layout

```
blitz-icons/
├─ packages/
│  ├─ icons-svg/        # Source of truth: raw, hand-authored SVGs by category
│  ├─ icons-react/       # Generated React components (published as blitz-icons)
│  └─ build-tools/       # Codegen pipeline: SVG → optimized SVG → TSX components
├─ apps/
│  └─ docs/               # Interactive documentation / icon playground
├─ CONTRIBUTING.md
├─ ROADMAP.md
└─ svgo.config.mjs
```

### How icons get built

```bash
npm run build:icons   # packages/icons-svg/src/**/*.svg → packages/icons-react/src/icons/*.tsx
npm run build         # also compiles blitz-icons to dist/ (ESM + CJS + .d.ts)
```

`packages/build-tools/src/generate.mjs` is the single source of truth for codegen. It:

1. Walks every category folder under `packages/icons-svg/src/`
2. Optimizes each SVG with SVGO (`svgo.config.mjs`)
3. Parses the optimized markup into an AST
4. Emits one `Bi<IconName>.tsx` component (built on the shared `IconBase`)
5. Writes a barrel `index.ts` and `packages/icons-svg/meta.json` for the docs site

This is what makes scaling from dozens to thousands of icons tractable: adding an icon is adding one `.svg` file and re-running the script — no per-icon hand-wiring.

### Package build

`blitz-icons` is bundled with `tsup` into:
- ESM + CJS output
- Full `.d.ts` type declarations
- **A separate entry point per icon** (`dist/icons/BiRocket.js`, etc.) so bundlers tree-shake down to exactly the icons a consumer imports — critical at 10,000+ icon scale. A single icon import resolves to well under 1KB plus one small shared runtime chunk.

## Framework support (planned packages)

| Package | Status |
|---|---|
| `blitz-icons` | ✅ Implemented in this repo |
| `@strikeblitz/icons-vue` | 🗺️ Roadmapped — same codegen pipeline, Vue SFC template target |
| `@strikeblitz/icons-svelte` | 🗺️ Roadmapped |
| `@strikeblitz/icons-angular` | 🗺️ Roadmapped |
| `@strikeblitz/icons-solid` | 🗺️ Roadmapped |
| `@strikeblitz/icons-native` (React Native) | 🗺️ Roadmapped — `react-native-svg` target |
| `@blitz/icons` (Web Component) | 🗺️ Roadmapped |
| Plain SVG / sprite sheet | 🗺️ Roadmapped |

See [ROADMAP.md](./ROADMAP.md) for details and sequencing.

## Variants

The architecture supports **Outline, Filled, Duotone, Rounded, Sharp, and Mini** variants generated from the same base geometry. This seed release ships the **Outline** variant only; see the roadmap for the variant rollout plan.

## Grid & sizing

Base canvas is **24×24**, with pixel-perfect rendering verified at 16, 20, 24, 32, and 48px via the `size` prop (stroke width auto-scales unless `absoluteStrokeWidth` is set).

## Documentation

Open `apps/docs/index.html` (serve locally, e.g. `npx serve apps/docs`) for a live, searchable icon browser with copy-to-clipboard for SVG, React, Vue, Svelte, and HTML, plus size/stroke/color controls and dark mode.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT © Blitz

## Community

Join the official Blitz Icons community on Telegram: **[@blitz_core](https://t.me/blitz_core)**
(Note: `@blitz_core` is the community channel handle, not the creator's name.)
