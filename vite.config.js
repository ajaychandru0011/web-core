const path = require("path");
const { ViteMinifyPlugin } = require("vite-plugin-minify");
const { default: htmlPurge } = require("vite-plugin-html-purgecss");
const ViteAMP = require("vite-plugin-amp");

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [ViteMinifyPlugin({}), htmlPurge()],
};
