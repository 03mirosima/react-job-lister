const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    hot: true,
    static: {
      directory: "./dist",
    },
  },
};
