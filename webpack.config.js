const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          },
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
            ],
          },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html',
          filename: './index.html'
      }), new MiniCssExtractPlugin({
        filename: 'main.css'
      }),new CopyWebpackPlugin({
        patterns:[
          {from: path.resolve(__dirname,"src", "assets/icons"),
          to: "assets/icons"},
          {from: path.resolve(__dirname,"src", "assets/images"),
          to: "assets/images"},
        ]
      })
    ]
}