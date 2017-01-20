'use strict';


const CssLoader = () => ({
    test: /\.css$/,
    loader: 'style!css'
});

const FontLoader = () => ({
    test: /\.(woff|woff2)(\?.*$|$)/,
    loader: 'url-loader?importLoaders=1&limit=10000&name=assets/app/[hash].[ext]'
});

const HtmlLoader = () => ({
    test: /\.html$/,
    loader: 'raw',
    exclude: /node_modules/
});

const ImageLoader = () => ({
    test: /\.(jpeg|jpg|png|gif|svg)(\?.*$|$)/,
    loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?{bypassOnDebug:true, progressive: true, optimizationLevel:7,interlaced:false,svgo:{plugins: [{removeViewBox: false},{removeEmptyAttrs: false}]}'
    ]
});

const JavascriptLoader = () => ({
    test: /\.js$/,
    loader: 'babel!jshint',
    exclude: /node_modules/
});

const JsonLoader = () => ({
    test: /\.json$/,
    loader: 'json',
    exclude: /node_modules/
});

const LessLoader = () => ({
    test: /\.less$/,
    loader: 'style!css!less'
});


const SassLoader = () => ({
    test: /\.scss$/,
    loader: 'style!css!sass'
});

const SvgLoader = () => ({
    test: /\.svg$/,
    loader: 'svg-inline',
    exclude: /node_modules/
});

const TsLintLoader = () => ({
    test: /\.ts$/,
    loader: 'tslint-loader'
});

const TypescriptLoader = params => {

    const routerLoader = 'angular2-router-loader';

    params = params || {};

    if (params.aot === true) {
        routerLoader += '?aot=true&genDir=./compiled/src/app';
    }
    return {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader',
            'angular2-template-loader',
            routerLoader

        ],
        exclude: [/\.(spec|e2e|async)\.ts$/]
    };
};

//** START Phaser loaders **//
const PixiLoader = () => ({ 
    test: /pixi\.js$/, 
    loader: 'expose-loader?PIXI'
});

const PhaserSplitLoader = () => ({
    test: /phaser-split\.js$/, 
    loader: 'expose-loader?Phaser'
});

const P2Loader = () => ({
    test: /p2\.js$/, 
    loader: 'expose-loader?p2'
});
//** END Phaser loaders **//

module.exports = {
    CssLoader,
    FontLoader,
    ImageLoader,
    HtmlLoader,
    JsonLoader,
    LessLoader,
    JavascriptLoader,
    SvgLoader,
    TsLintLoader,
    TypescriptLoader,
    SassLoader,
    PixiLoader,
    PhaserSplitLoader,
    P2Loader
};