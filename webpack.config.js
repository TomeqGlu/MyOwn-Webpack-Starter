
var path = require('path');

module.exports = {
   entry: "./src/app.js",
   output: {
      path: __dirname + '/public',
      filename: "bundle.js"
   },
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true, 
      watchContentBase: true,     
      port: 3000
   },
   
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
               'file-loader',
               {
                  loader: 'image-webpack-loader',
                  options: {
                     mozjpeg: {
                        progressive: true,
                        quality: 65
                     },
                     // optipng.enabled: false will disable optipng
                     optipng: {
                        enabled: false,
                     },
                     pngquant: {
                        quality: '65-90',
                        speed: 4
                     },
                     gifsicle: {
                        interlaced: false,
                     },
                     // the webp option will enable WEBP
                     webp: {
                        quality: 75
                     }
                  }
               },
            ],
         }
      ]
   }

   
}