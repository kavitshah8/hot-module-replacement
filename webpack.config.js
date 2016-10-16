var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080/", 
      "webpack/hot/dev-server",
      "./src/App.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: "",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};