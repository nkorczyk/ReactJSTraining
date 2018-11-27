const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (env, options) {
  const isProduction = process.env.NODE_ENV === "production";

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",

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
            use: "css-loader"
          })
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "ReactJS Mentoring Program",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      }),
      new ExtractTextPlugin("[name].css")
    ],

    devServer: {
      contentBase: "./dist"
    }
  };

  return config;
};
