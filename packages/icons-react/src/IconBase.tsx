import { forwardRef, createElement, type SVGProps, type ReactNode } from "react";

export interface BlitzIconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  /** Icon size in px, or any valid CSS size string. Default: 24 */
  size?: number | string;
  /** Icon color. Defaults to currentColor so it inherits text color. */
  color?: string;
  /** Stroke width for outline-based icons. Default: 1.75 */
  strokeWidth?: number | string;
  /**
   * When true, strokeWidth stays visually constant regardless of `size`
   * (mirrors the convention used by other stroke-icon libraries).
   * When false (default), strokeWidth scales down as size shrinks so
   * icons stay optically balanced at small sizes — a Blitz Icons default.
   */
  absoluteStrokeWidth?: boolean;
  /** Accessible title. When provided, the icon is exposed to screen readers. */
  title?: string;
  children?: ReactNode;
}

const DEFAULT_SIZE = 24;
const DEFAULT_STROKE = 1.75;

export interface IconNode {
  tag: string;
  attr: Record<string, string>;
  child?: IconNode[];
}

function renderNode(node: IconNode, key: string | number): ReactNode {
  return createElement(
    node.tag,
    { key, ...node.attr },
    node.child?.map((c, i) => renderNode(c, i))
  );
}

/**
 * buildIcon creates a forwardRef React component for a single Blitz Icon.
 * Internal helper consumed by every generated `Bi*` component.
 */
export function buildIcon(iconName: string, tree: IconNode[]) {
  const Icon = forwardRef<SVGSVGElement, BlitzIconProps>(
    (
      {
        size = DEFAULT_SIZE,
        color = "currentColor",
        strokeWidth = DEFAULT_STROKE,
        absoluteStrokeWidth = false,
        title,
        className,
        style,
        children,
        ...rest
      },
      ref
    ) => {
      const finalStroke = absoluteStrokeWidth
        ? strokeWidth
        : (Number(strokeWidth) * 24) / Number(size || 24);

      return createElement(
        "svg",
        {
          ref,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: size,
          height: size,
          fill: "none",
          color,
          stroke: color,
          strokeWidth: finalStroke,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: className ? `blitz-icon blitz-icon-${iconName} ${className}` : `blitz-icon blitz-icon-${iconName}`,
          style,
          role: title ? "img" : "presentation",
          "aria-hidden": title ? undefined : true,
          "aria-label": title,
          ...rest,
        },
        [
          title ? createElement("title", { key: "title" }, title) : null,
          ...tree.map((node, i) => renderNode(node, i)),
          children,
        ]
      );
    }
  );
  Icon.displayName = iconName;
  return Icon;
}
