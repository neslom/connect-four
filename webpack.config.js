module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(handlebars|hbs)$/, loader: 'handlebars-loader' },
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' }
    ]
  }
};
