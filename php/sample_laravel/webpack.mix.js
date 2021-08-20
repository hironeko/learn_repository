const mix = require("laravel-mix");
const tailwind = require("tailwindcss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/ts/app.ts", "public/js")
  .sass("resources/sass/app.scss", "public/css")
  .options({
    processCssUrls: false,
    postCss: [tailwind("./tailwind.config.js")],
  });

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
        exclude: /node_modules/,
      },
    ],
  },
});
