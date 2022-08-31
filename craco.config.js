const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components")
    }
  },
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  }
};
