const path = require('path');
const nodeModulesDir = path.join(__dirname, "node_modules");

module.exports = {
  entry: {
    main: "./index.js",
    test: "./test/test.js"
  },
  output: {
    path: "build",
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, exclude: [nodeModulesDir], loader: 'babel-loader' }
    ]
  }
};
