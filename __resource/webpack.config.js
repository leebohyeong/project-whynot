const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deviceOptions = {
    pc: {
        entry: {
            app: [
                './js/pc/app',
                './scss/pc/app'
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'assets/css/[name].css'
            }),

            // new HtmlWebpackPlugin({
            //     template: 'pug/pc/index.pug',
            //     filename: 'index.html',
            //     inject: false,
            //     minify: false
            // }),
        ]
    },
    mobile: {
        entry: {
            app: [
                './js/mobile/app',
                './scss/mobile/app'
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'm/assets/css/[name].css'
            }),

            // new HtmlWebpackPlugin({
            //     template: 'pug/mobile/index.pug',
            //     filename: 'm/index.html',
            //     inject: false,
            //     minify: false
            // }),
        ]
    }
};

const config = (env, options) => {
    const isProduction = options.mode === 'production';
    const isServer = !!env['WEBPACK_SERVE'];
    const device = env?.device ?? 'pc';

    const config = {
        mode: env?.mode ?? 'development',
        devtool: isProduction ? false : 'inline-source-map',
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.scss'],
        },
        entry: deviceOptions[device]['entry'],
        output: {
            path: isServer ? path.resolve(__dirname, '../') : path.resolve(__dirname, '../'),
            filename: `${device === 'pc' ? '' : 'm/'}assets/js/[name].js`
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 2,
                                url: false,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'autoprefixer'
                                        ],
                                    ],
                                },
                                sourceMap: true,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    outputStyle: 'expanded',
                                },
                                sourceMap: true
                            }
                        },
                    ]
                },
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'pug-loader',
                            options: {
                                pretty: '    ',
                            }
                        }
                    ],
                }
            ]
        },
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            static: [
                {
                    directory: path.resolve(__dirname, '../'),
                },
                {
                    directory: path.resolve(__dirname, '../'),
                }
            ],
            historyApiFallback: true,
            compress: true,
            port: device === 'pc' ? 8881 : 8882
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        chunks: 'initial',
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        enforce: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                },
            }
        },
        target: ['web', 'es5']
    };

    if (deviceOptions[device]['output']) {
        config.output = Object.assign({}, config.output, deviceOptions[device]['output']);
    }

    if (deviceOptions[device]['plugins']) {
        config.plugins = (config.plugins || []).concat(deviceOptions[device]['plugins']);
    }

    if (isProduction) {
        config.optimization.minimizer = [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ]
    }

    return config;
};
module.exports = config;