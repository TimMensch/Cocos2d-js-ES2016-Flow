/* eslint-env node */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var imageop = require('gulp-image-optimization');
var eslint = require('gulp-eslint');
var newer = require('gulp-newer');
var extend = require('node.extend');
var webpack = require('webpack');
var path = require('path');
var gutil = require("gulp-util");
var which = require('which');
var os = require('os');

//var WebpackDevServer = require("webpack-dev-server");


var flow = require('gulp-flowtype');
var WebpackDevServer = require("webpack-dev-server");
var uglify = require('gulp-uglify');

var paths = {
    cache: "./cache",
    main: "./maindist",
    main_js: "./maindist/js",
    main_images: "maindist/assets",
    cc_modules: "./frameworks/cocos2d-html5/moduleConfig.json",
    project: "./src/project.json",
    frameworks: "./frameworks/cocos2d-html5",
    int: "./int",
    cocos2d: "cocos2d.js"
};

var imageMinOptions = {
    optimizationLevel: 1,
    progressive: true,
    interlaced: true
};

// function resolveSource(source, filename) {
//     console.log("resolveSource");
//     console.log(source, filename);
//     return filename;
// }

var webpackOptions = require('./webpack.config.js');

var node_env = process.env.NODE_ENV;

if (node_env && node_env.trim().toLowerCase()==="production") {
    console.log("building production");
    imageMinOptions.optimizationLevel = 5 ;
    webpackOptions.plugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ];
}

var webpackmainOptions = extend({},webpackOptions);
webpackmainOptions = extend(webpackmainOptions,{
    entry: "./src/js/main.js",
    output: {
        filename: "main.js",
        sourceMapFilename: "main.js.map",
        path: path.resolve(paths.main_js)
    }
});

var _jsAddedCache = {};

function _getJsListOfModule(moduleMap, moduleName, dir) {
    if (_jsAddedCache[moduleName]) return null;
    dir = dir || "";
    var jsList = [];
    var tempList = moduleMap[moduleName];
    if (!tempList) throw new Error("can not find module [" + moduleName + "]");
    var ccPath = path;
    for (var i = 0, li = tempList.length; i < li; i++) {
        var item = tempList[i];
        if (_jsAddedCache[item]) continue;
        var extname = ccPath.extname(item);
        if (!extname) {
            var arr = _getJsListOfModule(moduleMap, item, dir);
            if (arr) jsList = jsList.concat(arr);
        } else if (extname.toLowerCase() === ".js") jsList.push(ccPath.join(dir, item));
        _jsAddedCache[item] = 1;
    }
    return jsList;
}

function getCocosList() {

    var moduleConfig = require(paths.cc_modules);
    var moduleMap = moduleConfig["module"];

    var projectConfig = require(paths.project);
    var modules = projectConfig["modules"];

    var jsList = [ path.join(paths.frameworks,"CCBoot.js") ];

    if (modules.indexOf("core") < 0) {
        modules.splice(0, 0, "core");
    }
    for (var i = 0, li = modules.length; i < li; i++) {
        var arr = _getJsListOfModule(moduleMap, modules[i], paths.frameworks);
        if (arr) jsList = jsList.concat(arr);
    }
    return jsList;
}

gulp.task('lint', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(eslint({
            fix: true
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('flow', function(cb) {

    // Windows needs FLOW_BIN to be set. Even when
    // flow is in the path. Sigh.
    if (os.platform()==='win32') {
        var flowpath = which.sync('flow');
        process.env.FLOW_BIN = flowpath;
    }

    return gulp.src('./src/js/*.js')
      .pipe(flow({
          all: false,
          weak: false,
          declarations: './lib',
          killFlow: false,
          beep: true,
          abort: false
      }));
});

gulp.task('main-html', function(cb) {
    gulp.src(['src/html/main.html'])
        .pipe(rename("index.html"))
        .pipe(gulp.dest('maindist'));
});

gulp.task('cocos2d', function() {
    return gulp.src(getCocosList())
    .pipe(newer(path.join(paths.int,paths.cocos2d)))
    .pipe(sourcemaps.init())
    .pipe(concat(paths.cocos2d))
    // .pipe(uglify({
    //     compress: {
    //         unsafe: true
    //     }
    // }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.int));
});

gulp.task('main-js', function(callback) {
    // run webpack
    webpack(webpackmainOptions, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});//

gulp.task('main-images', function(cb) {
    gulp.src([
        'src/res/**/*.{png,jpg,gif,jpeg}'
    ])
    .pipe(newer(paths.main_images))
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(paths.main_images))
    .on('end', cb)
    .on('error', cb);
});

gulp.task('main-copy-js', function() {
    gulp.src([
        "int/cocos2d.js",
        "int/cocos2d.js.map",
    ])
    .pipe(gulp.dest(paths.main_js));
});
gulp.task('main-copy-root', function() {
    gulp.src([
        "src/html/index.html",
        "src/.cocos-project.json",
        "src/project.json"
    ])
    .pipe(gulp.dest(paths.main));
});

gulp.task("serve", ['main'], function(callback) {
    // Start a webpack-dev-server
    //
    var options = extend({},webpackmainOptions);
    options.devtool = "eval-source-map";
    options.debug = true;

    var compiler = webpack(webpackmainOptions);

    new WebpackDevServer(compiler, {
        publicPath: "/maindist/js/",
        stats: {
            colors: true
        }
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/maindist/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('main', ['lint', 'main-js', 'main-images', 'main-copy-js', 'main-copy-root']);

gulp.task('default', ['main']);
