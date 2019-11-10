const merge = require("webpack-merge")
const base = require("../webpack.base.config")

module.exports = ({ config }) => {
    return merge(config,base);
}