const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (env, options) {
  const isProduction = env === "prod";

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",
    output: {
      publicPath: '/'
    },

    resolve: {
      extensions: [".js", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: 'css-loader',
                options: { minimize: isProduction }
              }
            ]
          })
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "ReactJS Mentoring Program",
        hash: true,
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        } : {},
        template: path.resolve(__dirname, "./index.html")
      }),
      new ExtractTextPlugin("[name].css")
    ],

    devServer: {
      contentBase: "./dist",
      historyApiFallback: true
    }
  };

  return config;
};
