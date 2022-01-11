import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "iife",
    strict: false
  },
  plugins: [commonjs(), terser(), bookmarklet()],
};

function bookmarklet() {
  return {
    name: "bookmarklet",
    renderChunk(code) {
      return `javascript:${code}`;
    },
  };
}
