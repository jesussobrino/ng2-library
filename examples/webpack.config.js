var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    {CheckerPlugin} = require('awesome-typescript-loader');

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
    resolve: {
        extensions: ['.ts', '.js', '.html']
    },

    devtool: 'cheap-module-source-map',

    module: {
        rules: [
            {
            test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    },
                    {
                        loader: 'angular2-router-loader'
                    }
                ],
                exclude: [/(node_modules)/]
            },

            /* Raw loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/raw-loader
             */
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },

    entry: {
        'app': './src/bootstrap.ts'
    },

    devServer: {
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunks: false
        }
    },

    output: {
        path: root('dist'),
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src')
        ),

        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            chunksSortMode: 'dependency'
        }),

        new webpack.optimize.OccurrenceOrderPlugin(true),

        // fork the typescript linter into another process to speed up compilation
        new CheckerPlugin()
    ]
};
