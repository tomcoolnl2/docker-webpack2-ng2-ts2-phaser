'use strict';

var path        = require('path');
var webpack     = require('webpack');
var helpers     = require('./helpers');
var loaders     = require('./webpack-loaders');

// Webpack Plugins
const CopyWebpackPlugin     = require('copy-webpack-plugin');
const ForkCheckerPlugin     = require('awesome-typescript-loader').ForkCheckerPlugin;

// Phaser webpack config
var phaserModule    = path.join(__dirname, '../node_modules/phaser-ce/');
var pixi            = path.join(phaserModule, 'build/custom/pixi.js');
var p2              = path.join(phaserModule, 'build/custom/p2.js');
var phaser          = path.join(phaserModule, 'build/custom/phaser-split.js');

// Constants
var METADATA = {
    title: 'Indivirtual Game'
};

module.exports = {

    metadata: METADATA,
    cache: true,
    entry: {
        'polyfills': './src/app/polyfills.ts',
        'vendor': './src/app/vendors.ts',
        'app': './src/app/bootstrap.ts',
        vendor: ['pixi', 'p2', 'phaser']
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: helpers.root('src'),
        modulesDirectories: ['node_modules'],
        alias: {
            'common': 'shared',
            'shared': 'shared',
            'store': 'store',
            'root': 'root',
            'pixi': pixi,
            'p2': p2,
            'phaser': phaser

        }
    },

    module: {

        exprContextCritical: false,

        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'string-replace-loader',
                query: {
                    search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
                    replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
                    flags: 'g'
                },
                include: [helpers.root('src')]
            },
        ]
    },


    plugins: [

        //  Do type checking in a separate process, so webpack don't need to wait.
        new ForkCheckerPlugin(),

        // Shares common code between the pages.
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
        }),

        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' },
            { from: 'src/*.txt', flatten: true },
            { from: 'src/sw.js', flatten: true },
            { from: 'src/manifest.json', flatten: true }
        ])

    ],

    node: {
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }

};