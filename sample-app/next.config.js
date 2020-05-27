/* eslint-disable @typescript-eslint/no-var-requires */
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        {
          loader: "linaria/loader"
        },
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"]
          }
        }
      ]
    });
    return config;
  }
});
