const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');


//
// Settings
//
const IS_PRODUCTION = process.env.NODE_ENV === 'production';


//
// Webpack config
//
const config = {
    entry: {
        app: path.resolve(__dirname, 'scripts', 'app.js')
    },
    output: {
        filename: 'assets/js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    cache: false,
    mode: (IS_PRODUCTION ? 'production' : 'development'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css'
        })
    ]
}


//
// Update Webpack config for different builds
//
IS_PRODUCTION ? [
    // Additional plugins for production builds
] : [
    // Additional plugins for development builds
];


//
// Export the config
//
module.exports = config;