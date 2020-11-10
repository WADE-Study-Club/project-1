const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtrackCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry:{
    main :['@babel/polyfill', ENTRY_FILE],
    barChart :['@babel/polyfill', path.resolve(__dirname, "assets", "js", "barChart.js")],
    donutChart: ['@babel/polyfill', path.resolve(__dirname, "assets", "js", "donutChart.js")],
    colorbar: ['@babel/polyfill', path.resolve(__dirname, "assets", "js", "colorbar.js")],
    timebar: ['@babel/polyfill', path.resolve(__dirname, "assets", "js", "timebar.js")]
},
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ExtrackCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins() {
                  return [autoprefixer({ browsers: "cover 99.5%" })]
                }
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  externals: {
    moment: 'moment'
  },
  plugins: [new ExtrackCSS("styles.css")],
  devtool: 'cheap-module-source-map'
}

module.exports = config;