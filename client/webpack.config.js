const path = require('path');
const os = require('os');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const chalk = require('chalk');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getOutputPath() {
    return path.resolve(__dirname, 'dist');
}

function getPublicPath() {
    return './';
}

function getEntry() {
    const result = [];

    // the entry point of our app
    result.push('./index.js');

    return result;
}

function getPlugins(env) {
    const result = [];
    const htmlOptions = {
        template: 'index.html'
    };

    if (env.isDevServer) {
        htmlOptions.customSettings = 'Settings.url=\'http://localhost:3030\';';
    }

    result.push(new HtmlWebpackPlugin(htmlOptions));

    result.push(new CleanWebpackPlugin([ 'dist' ], {
        verbose: true,
        dry: false,
        exclude: []
    }));

    result.push(new CopyWebpackPlugin([
        { from: 'assets', to: 'assets' }
    ]));

    return result;
}
const config = function (env) {
    const settings = {
        entry: getEntry(),
        output: {
            filename: 'bundle.js',
            // the output bundle

            path: getOutputPath(env),

            publicPath: '/'
            // necessary for HMR to know where to load the hot update chunks
        },

        context: path.resolve(__dirname, 'src'),

        devtool: 'cheap-module-source-map',

        devServer: {
            historyApiFallback: true,

            hot: false,
            // enable HMR on the server

            contentBase: path.resolve(__dirname, 'dist'),
            // match the output path

            publicPath: '/'
            // match the output `publicPath`
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        'babel-loader'
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader?modules',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [ {
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'sass-loader' // compiles Sass to CSS
                    } ]
                },
                {
                    test: /\.jpeg?$|\.gif$|\.png$|\.wav$|\.svg$/,
                    use: [ {
                        loader: 'url-loader',
                        options: {
                            limit: '8092',
                            name: './images/[name].[ext]',
                            publicPath: getPublicPath(env)
                        }
                    } ],
                    exclude: /node_modules/
                }
            ]
        },

        plugins: getPlugins(env)
    };

    return settings;
};

module.exports = function (env) {
    if ( !env ) {
        env = {};
    }
    console.log(`Processing Env: ${chalk.green(process.env.NODE_ENV)}`);
    console.log(`env object: ${chalk.magenta(JSON.stringify(env))}`);

    return config( env );
};