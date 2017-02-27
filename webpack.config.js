// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }
    
    return false; 
}

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
    context: path.join(__dirname, 'app', 'src', 'js', 'reactapp'),

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './main'
  ],

  output: {
    path: path.join(__dirname, 'app', 'dist', 'js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  devtool: getDevTool(),
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
    ]
  }
};
