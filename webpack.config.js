const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = module.exports = {
  entry: {
    bundle: './',
    vendors: Object.keys(pkg.dependencies)
  },

  output: {
    path: path.resolve('./dist'),
    filename: 'js/[name].js'
  },

  context: path.resolve(__dirname, 'src'),

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-1'
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],

    noParse: []
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: Infinity
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      title: 'React + MobX + Webpack Boilerplate'
    })
  ]
};

if(process.env.NODE_ENV !== 'production') {
  config.module.loaders[0].query.presets.push('react-hmre');
}
