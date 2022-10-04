const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

dotenv.config();

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/transform-runtime'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, 'public')}/index.html`,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
      emitWarning: false,
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    plugins: [new TsConfigPathsPlugin()],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
};
