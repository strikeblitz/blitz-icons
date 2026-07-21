# Changelog

All notable changes to Blitz Icons are documented here.

## [0.1.0] — Foundation release

### Added
- Monorepo scaffolding (`packages/icons-svg`, `packages/icons-react`, `packages/build-tools`, `apps/docs`)
- 87 original icons across 10 categories: Interface, Arrows, Files, Users, Dev, AI, Communication, Media, Security, Commerce
- Codegen pipeline (`packages/build-tools/src/generate.mjs`) converting SVG sources into typed React components
- `@blitz/icons-react` package: full prop API, ESM+CJS+d.ts build via `tsup`, per-icon tree-shakeable entry points
- Interactive documentation/playground (`apps/docs/index.html`)
- Contribution guidelines, roadmap, MIT license, CI workflow
