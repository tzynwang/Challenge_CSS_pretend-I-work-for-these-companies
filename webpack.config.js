const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/scripts/main.js',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js' // development build with compiler
      // vue: 'vue/dist/vue.runtime.esm.js' // product runtime without compiler
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'production'),
    clean: true
  }
}
