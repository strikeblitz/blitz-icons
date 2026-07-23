# Roadmap

Blitz Icons — Created by Blitz · Community: [@blitz_core](https://t.me/blitz_core)

## v0.1 — Foundation (this release)

- [x] Monorepo architecture (`packages/icons-svg`, `packages/icons-react`, `packages/build-tools`, `apps/docs`)
- [x] Codegen pipeline: SVG source → SVGO optimization → AST → TSX components
- [x] 87 original seed icons across 10 categories (Interface, Arrows, Files, Users, Dev, AI, Communication, Media, Security, Commerce)
- [x] `blitz-icons` with full prop API (`size`, `color`, `strokeWidth`, `absoluteStrokeWidth`, `className`, `style`, `title`, ref forwarding), ESM+CJS+d.ts build, per-icon tree-shakeable entry points
- [x] Interactive docs/playground demo (search, category filter, size/stroke/color controls, multi-framework code copy, dark mode)
- [x] Contribution guidelines and design conventions documented

## v0.2 — Category depth (target: 500–800 icons)

- [ ] Fill out all 10 existing categories to 40–60 icons each
- [ ] Add remaining launch categories: Navigation, Text Editing, Authentication, Charts, Analytics, Finance, Payment, Cryptocurrency, Blockchain, Gaming, Education, Medical, Weather, Maps, Travel, Transportation, Food, Animals, Nature, Space, Devices, Smart Home, IoT, Notifications, Time, Calendar
- [ ] Automated visual regression testing (render every icon at 16/24/32/48px, diff against baseline)
- [ ] CI workflow: lint SVG conventions, run codegen, typecheck, build — on every PR

## v0.3 — Variants

- [ ] **Filled** variant (auto-derived where possible: stroke shapes → filled silhouettes, manual pass for icons that don't translate cleanly)
- [ ] **Duotone** variant (two-tone fill using CSS custom properties for primary/secondary color)
- [ ] **Rounded** / **Sharp** corner-radius variants generated from a shared corner-radius parameter in the SVG source metadata
- [ ] **Mini** variant (simplified geometry optimized for 16px rendering, not just a scaled-down Outline)
- [ ] Variant switcher live in docs site

## v0.4 — Multi-framework packages

Same `icons-svg` source of truth, new codegen targets:

- [ ] `@strikeblitz/icons-vue` (Vue 3 SFC / functional components)
- [ ] `@strikeblitz/icons-svelte`
- [ ] `@strikeblitz/icons-solid`
- [ ] `@strikeblitz/icons-angular`
- [ ] `@strikeblitz/icons-native` (React Native via `react-native-svg`)
- [ ] `@blitz/icons` Web Component (Custom Elements, framework-agnostic)
- [ ] Plain SVG sprite sheet + CDN-hosted individual SVG files
- [ ] Framework-specific docs snippets (Next.js, Nuxt, Remix, Qwik, Astro, Vite) in the docs site

## v0.5 — Documentation site v2

- [ ] Full production docs site (beyond the current single-file demo): fast client-side search (e.g. indexed for instant filtering at 10k+ icons), category browser, PWA + offline support, SEO-optimized per-icon pages, keyboard shortcuts, accessibility preview panel
- [ ] Public changelog + versioned release notes
- [ ] npm package badges, bundle-size reporting per icon

## v1.0 — Production-grade release (target: 2,000+ icons)

- [ ] 2,000+ icons across all launch categories, Outline + Filled variants complete
- [ ] Stable semver, published `blitz-icons` v1.0.0 on npm
- [ ] Full accessibility audit (screen reader pass on interactive docs site)
- [ ] Brand icons category (with clear usage/trademark guidance)
- [ ] Community contribution pipeline live (external PRs reviewed against `CONTRIBUTING.md` conventions)

## Beyond 10,000 icons — scaling strategy

- **Design system tooling:** parametric generation helpers (shared corner-radius, stroke-width, and grid constants enforced by lint rules against `packages/icons-svg/src`) so contributors can produce on-brand icons faster.
- **Category governance:** each category gets a maintainer who reviews new icons for originality and consistency before merge.
- **Automated duplicate/similarity detection:** structural SVG diffing to catch near-duplicate icons and icons that drift toward existing libraries' silhouettes.
- **Incremental publishing:** icons ship continuously via automated minor releases rather than large batch drops, so consumers get new icons without waiting on major versions.
- **Localization-aware icon sets:** RTL-aware mirroring metadata per icon (arrows, chevrons, etc.) baked into the component API.

## Feedback

Roadmap priorities are shaped by community input — join **[@blitz_core](https://t.me/blitz_core)** on Telegram to weigh in.
