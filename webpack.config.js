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
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' }
    ]
  }
};
