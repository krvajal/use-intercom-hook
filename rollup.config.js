const babel = require("rollup-plugin-babel");

module.exports = {
  input: "src/index.js",
  externals: ["reacts"],
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  plugins: [babel()]
};
