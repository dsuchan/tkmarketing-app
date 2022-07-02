const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/stylesheets/abstracts/variables.scss";
          @import "@/assets/stylesheets/abstracts/mixins.scss";
          @import "@/assets/stylesheets/abstracts/functions.scss";
          @import "@/assets/stylesheets/base/breakpoints.scss";
          @import "@/assets/stylesheets/base/grid.scss";
        `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve(__dirname, "./src/assets/stylesheets"), // link any scss file inside vue components using "import ~styles/name-of-scss-file"
      },
    },
  },
};
