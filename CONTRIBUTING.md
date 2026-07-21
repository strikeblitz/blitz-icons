# Contributing to Blitz Icons

Thanks for helping grow Blitz Icons — created by Blitz, with the community gathering at [@blitz_core](https://t.me/blitz_core) on Telegram.

## Ground rules for new icons

1. **100% original.** Do not trace, adapt, or closely mimic any icon from Lucide, Heroicons, Tabler, Feather, Remix, Material Icons, Fluent UI, Phosphor, Bootstrap Icons, Font Awesome, Ionicons, Ant Design Icons, Carbon Icons, or any other existing set. If in doubt, redesign from scratch using our primitives (below).
2. **24×24 viewBox.** All source icons live at `packages/icons-svg/src/<category>/<icon-name>.svg` on a `0 0 24 24` canvas.
3. **Stroke convention:** `fill="none"`, `stroke="currentColor"`, `stroke-width="1.75"`, `stroke-linecap="round"`, `stroke-linejoin="round"`. The build pipeline strips redundant `stroke`/`stroke-width` attributes so they inherit from the component's `color`/`strokeWidth` props — don't hardcode colors.
4. **Blitzy signature details:**
   - Rounded corners and joins everywhere; avoid sharp 90° miters.
   - Container shapes (files, folders, cards, windows) use a small diagonal bevel on one corner instead of a full rounded corner — this is a recognizable brand cue, use it consistently.
   - Keep negative space balanced — icons should read clearly at 16px.
5. **Naming:** kebab-case filenames (`arrow-up-right.svg`, `shield-check.svg`). The codegen pipeline turns this into the `Bi` + PascalCase component name automatically (`BiArrowUpRight`).
6. **One concept per icon.** Avoid combining unrelated glyphs into a single icon.

## Adding an icon

```bash
# 1. Add your SVG under the right category
packages/icons-svg/src/<category>/my-icon.svg

# 2. Regenerate components
npm run build:icons

# 3. Verify it type-checks and builds
cd packages/icons-react && npm run typecheck && npm run build
```

If the category doesn't exist yet, create the folder — the pipeline picks up new categories automatically.

## Adding a new category

Categories are just folders under `packages/icons-svg/src/`. No config changes needed — `generate.mjs` walks the directory tree at build time.

## Pull request checklist

- [ ] Icon(s) follow the stroke/geometry conventions above
- [ ] Filename is kebab-case and descriptive
- [ ] `npm run build:icons` runs clean
- [ ] `npm run typecheck` passes in `packages/icons-react`
- [ ] No visual resemblance to an existing icon library (self-check against the list above)
- [ ] Icon renders correctly at 16px, 24px, and 48px (spot-check in `apps/docs`)

## Reporting issues / requesting icons

Open a GitHub issue, or drop a request in the Telegram community: **[@blitz_core](https://t.me/blitz_core)**.

## Code of conduct

Be respectful, be constructive, assume good faith. This is a community project first.
