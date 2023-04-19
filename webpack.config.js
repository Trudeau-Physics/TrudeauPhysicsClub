const path = require('path');

module.exports =
{
    entry: './app.js',
    mode: 'production',
    target: 'node',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js']
      }
}