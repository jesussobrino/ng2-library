/**
 * Adapted from angular2-webpack-starter
 */
const helpers = require('./config/helpers'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

var autoprefixer = require('autoprefixer');
/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: helpers.root('index.ts'),

    output: {
        path: helpers.root('bundles'),
        publicPath: '/',
        filename: 'core.umd.js',
        library: 'mt-components',
        libraryTarget: 'umd'
    },

    // require those dependencies but don't bundle them
    externals: [/^\@angular\//, /^rxjs\//],

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'tslint-loader'
                    },
                    {
                        loader: 'awesome-typescript-loader'
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            },

            // all css required in src/app files will be merged in js files
            {
                test: /\.css$/,  loader: 'raw-loader!postcss-loader'
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

    plugins: [
        // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src')
        ),

        new webpack.LoaderOptionsPlugin({
            options: {
                tslintLoader: {
                    emitErrors: false,
                    failOnHint: false
                }
            }
        }),

        // Reference: https://github.com/johnagan/clean-webpack-plugin
        // Removes the bundle folder before the build
        new CleanWebpackPlugin(['bundles'], {
            root: helpers.root(),
            verbose: false,
            dry: false
        }),

        new webpack.LoaderOptionsPlugin({
            // add debug messages
            debug: true,
            minimize: false,
            /**
             * PostCSS
             * Reference: https://github.com/postcss/autoprefixer-core
             * Add vendor prefixes to your css
             */
            postcss: [
                autoprefixer({
                    browsers: ['last 2 version']
                })
            ]
        })
    ]
};
