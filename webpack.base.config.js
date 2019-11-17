const path = require("path");
const file = (...args) => path.resolve(__dirname, ...args);

module.exports = {
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/,/\.tsx$/],
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: [/\.ts$/,/\.tsx$/],
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test:[/\.scss$/],
        exclude: /node_modules/,
        loader: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules"],
    alias: {
      "@": file("src")
    }
  }
};