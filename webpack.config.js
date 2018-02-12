'use strict';

module.exports = {

    context: __dirname + '/app',
    entry: "./index.js",
    output: {
        filename: "./bundle.js",
        path: __dirname + '/public'
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["react", "env"],
                    plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                }
            },
        }]
    },
    devServer: {
        contentBase: __dirname + '/public',
        open: true,
        historyApiFallback: true,
    }
};