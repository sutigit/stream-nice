import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/Button.tsx",
    output: {
      file: "dist/button.js",
    },
  },
  {
    input: "src/add.ts",
    output: {
      file: "dist/add.js",
    },
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [typescript()],
}));
