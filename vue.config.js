module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/",
  chainWebpack: (config) => {
    config.module
      .rule("pdf")
      .test(/\.(pdf)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/resumes/[name].[hash:8].[ext]",
      });
  },
};
