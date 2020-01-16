const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: "./",
  outputDir: "dist",
  devServer: {
    // host: "localhost", //要设置当前访问的ip 否则失效
    // open: true, //浏览器自动打开页面
    proxy: {
      "/api": {
        target: "http://47.111.175.231:9104",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    // sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/variable.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-html-loader")
      .loader("pug-html-loader")
      .end();
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"));
  }
};
