const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'public')
  },
  modules: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['bable-loader']
      }
    ]
  },
  plugins: [
    "syntax-class-properties",
    "syntax-decorators",
    "syntax-object-rest-spread",
    "transform-class-properties",
    "transform-object-rest-spread"
  ]
}
