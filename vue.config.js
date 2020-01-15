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
    sourcMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@assets/styles/variable.scss";`
      }
    }
  }
};