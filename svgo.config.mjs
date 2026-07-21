// Blitz Icons — SVGO optimization config
// Keeps icons pixel-perfect and prunes anything that inflates bundle size.
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          removeUselessDefs: true,
          convertPathData: { floatPrecision: 2 },
        },
      },
    },
    "removeDimensions",
    "removeXMLNS",
    {
      name: "removeAttrs",
      params: { attrs: "(data-name|id)" },
    },
  ],
};
