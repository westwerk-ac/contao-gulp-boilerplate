var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    combine = require('stream-combiner'),
    prefix = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    header = require('gulp-header'),
    concat = require('gulp-concat');
    livereload = require('gulp-livereload');

// Set some vars

var themepath = './files/theme/'

// The GULP Tasks

// Watch the css direcotry for changes and trigger the live reload
// For livereload see https://github.com/vohof/gulp-livereload
gulp.task('watch', ['css_main'], function () {
    gulp.watch(themepath + 'less/main.less', ['css_main']);
    gulp.watch(themepath + 'less/partials/*.less', ['css_main']);
    livereload.listen();
    gulp.watch(themepath + 'css/**').on('change', livereload.changed);
});

// Compile our css and push it to the public webfolder
gulp.task('css_main', function () {
    gulp.src(themepath + 'less/main.less')
        .pipe(less())
        .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(header("/* This file is generated — do not edit by hand! */\n"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(themepath + 'css/'));
});

// Minify the css
gulp.task('css_minify', ['css_main'], function() {
    gulp.src('./files/theme/reaq/css/*.css')
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(header("/* This file is generated — do not edit by hand! */\n"))
    .pipe(gulp.dest(themepath + 'css/'));
});

// We need the bootstrap fonts in public, lets copy
gulp.task('copy_fonts', function () {
    var combined = combine(
        gulp.src(['./bower_components/bootstrap/fonts/**/*.{ttf,woff,eof,svg}']),
        gulp.src(['./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}']),
        gulp.dest(themepath + 'fonts')
    );
    combined.on('error', console.error.bind(console));
});

// Define default and special tasks
gulp.task('default', ['css_minify', 'copy_fonts']);
gulp.task('dev', ['watch']);