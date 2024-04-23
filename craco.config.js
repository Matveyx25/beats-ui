const path = require("path");

module.exports = {
	webpack: {
    alias: {
      shared: path.resolve(__dirname, "src/components/shared"),
      pages: path.resolve(__dirname, "src/pages"),
      hooks: path.resolve(__dirname, "src/hooks"),
      helpers: path.resolve(__dirname, "src/helpers"),
      services: path.resolve(__dirname, "src/services"),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/_variables.scss";
        `,
      },
    },
  },
};