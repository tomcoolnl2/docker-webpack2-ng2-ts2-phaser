'use strict';


var CssLoader = function () {
    return {
        test: /\.css$/,
        loader: 'style!css'
    };
};

var FontLoader = function () {
    return {
        test: /\.(woff|woff2)(\?.*$|$)/,
        loader: 'url-loader?importLoaders=1&limit=10000&name=assets/app/[hash].[ext]'
    };
};


var HtmlLoader = function () {
    return {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
    };
};


var ImageLoader = function () {
    return {
        test: /\.(jpeg|jpg|png|gif|svg)(\?.*$|$)/,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?{bypassOnDebug:true, progressive: true, optimizationLevel:7,interlaced:false,svgo:{plugins: [{removeViewBox: false},{removeEmptyAttrs: false}]}'
        ]
    };
};


var JavascriptLoader = function () {
    return {
        test: /\.js$/,
        loader: 'babel!jshint',
        exclude: /node_modules/
    };
};

var JsonLoader = function () {
    return {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
    };
};

var LessLoader = function () {
    return {
        test: /\.less$/,
        loader: 'style!css!less'
    };
};


var SassLoader = function () {
    return {
        test: /\.scss$/,
        loader: 'style!css!sass'
    };
};

var SvgLoader = function () {
    return {
        test: /\.svg$/,
        loader: 'svg-inline',
        exclude: /node_modules/
    };
};

var TsLintLoader = function () {
    return {
        test: /\.ts$/,
        loader: 'tslint-loader'
    };
};


var TypescriptLoader = function (params) {

    var routerLoader = 'angular2-router-loader';

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
var PixiLoader = function () {
    console.log('********** Pixi ********** ')
    return { 
        test: /pixi\.js$/, 
        loader: 'expose-loader?PIXI'
    };
};

var PhaserSplitLoader = function () {
    return {
        test: /phaser-split\.js$/, 
        loader: 'expose-loader?Phaser'
    };
};

var P2Loader = function () {
    return {
        test: /p2\.js$/, 
        loader: 'expose-loader?p2'
    };
};
//** END Phaser loaders **//

module.exports = {
    CssLoader: CssLoader,
    FontLoader: FontLoader,
    ImageLoader: ImageLoader,
    HtmlLoader: HtmlLoader,
    JsonLoader: JsonLoader,
    LessLoader: LessLoader,
    JavascriptLoader: JavascriptLoader,
    SvgLoader: SvgLoader,
    TsLintLoader: TsLintLoader,
    TypescriptLoader: TypescriptLoader,
    SassLoader: SassLoader,
    PixiLoader: PixiLoader,
    PhaserSplitLoader: PhaserSplitLoader,
    P2Loader: P2Loader
};