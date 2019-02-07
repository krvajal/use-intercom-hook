module.exports = {
  input: "src/index.js",
  externals: ["reacts"],
  output: {
    file: "dist/index.js",
    format: "cjs"
  }
};
