# blitz-icons

**Lightning-fast, tree-shakeable React icon components.**
Part of [Blitz Icons](https://blitzicons.nett.to) — created by Blitz.

[Full docs & icon browser](https://blitzicons.nett.to) · [GitHub](https://github.com/strikeblitz/blitz-icons) · [Telegram community — @blitz_core](https://t.me/blitz_core)

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

## Props

Every icon component accepts:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number \| string` | `24` | Width & height |
| `color` | `string` | `currentColor` | Stroke color |
| `strokeWidth` | `number \| string` | `1.75` | Stroke thickness |
| `absoluteStrokeWidth` | `boolean` | `false` | Keep stroke visually constant across sizes |
| `className` | `string` | — | Passed to the root `<svg>` |
| `style` | `CSSProperties` | — | Passed to the root `<svg>` |
| `title` | `string` | — | Adds an accessible `<title>` + `aria-label` |
| `ref` | — | — | Forwarded to the underlying `<svg>` |

Standard `SVGProps` (`onClick`, `data-*`, etc.) are also accepted and spread onto the `<svg>`.

## Tree-shaking

Each icon ships as its own entry point (`blitz-icons/icons/BiRocket`), so bundlers only include the icons you actually import — this scales cleanly as the library grows past thousands of icons.

## License

MIT © Blitz
