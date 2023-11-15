const path = require("path");
const html_webpack_plugin = require("html-webpack-plugin");
const wasm_pack_plugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: "./public/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new html_webpack_plugin({
      template: "./public/index.html",
    }),
    new wasm_pack_plugin({
      crateDirectory: path.resolve(__dirname, "."),
    }),
  ],
  experiments: {
    asyncWebAssembly: true,
  },
};
