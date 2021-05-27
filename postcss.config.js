const Dotenv = require('dotenv-webpack');

const dotenv = new Dotenv()

module.exports = {
  options: {
    esModule: false,
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    dotenv
    // loaderOptions: {
    //   scss: {
    //     prependData: `@import "@/styles/_variables.scss";`
    //   }
    // }
  },
}
