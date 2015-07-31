var path = require('path');
var webpack = require('webpack');
var app = require('./package.json');
var IS_DEV = (process.env.NODE_ENV === 'dev');

var PORT = 3030;
var APP_NAME = app.name.replace(/-/g, '_');
var APP_ENTRY = [
  // Needed for phantomjs:
  'script!./node_modules/es5-shim/es5-shim.js',
  './' + app.main];

// Deployment configuration
var entry = APP_ENTRY;
var jsLoaders = ['babel'];

// Dev configuration
if (IS_DEV) {
  entry = [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server'
  ].concat(APP_ENTRY);

  jsLoaders = ['react-hot', 'babel'];
}

// Used in DEV
var OUTPUT_PUBLIC_PATH = 'http://localhost:' + PORT + '/assets/' + APP_NAME;

module.exports = {
  devtool: IS_DEV ? 'eval' : undefined,
  entry: entry,
  output: {
    path: __dirname + '/../rails_engine/app/assets/javascripts/' + APP_NAME,
    filename: APP_NAME + '_bundle.js',
    publicPath: OUTPUT_PUBLIC_PATH
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: jsLoaders,
      exclude: [/node_modules/, /vendor/]
    },
      {test: /\.css?$/, loaders: ['style', 'raw']},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  devServer: {
    port: PORT,
    devtool: 'source-map',
    publicPath: OUTPUT_PUBLIC_PATH,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }
};
