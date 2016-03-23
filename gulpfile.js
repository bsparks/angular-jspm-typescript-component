'use strict';

var gulp = require('gulp'),
    tslint = require('gulp-tslint'),
    jspm = require('gulp-jspm'),
    rename = require('gulp-rename'),
    Server = require('karma').Server;

var paths = {
    sources: 'src/**/*.ts',
    views: 'src/**/*.html',
    main: 'src/jspmts-component.dir.ts'
};

gulp.task('lint', function() {
    return gulp.src(paths.sources)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('build', function() {
    var stream = gulp.src(paths.main)
        .pipe(jspm({ selfExecutingBundle: true })) // `jspm bundle-sfx main`
        .pipe(rename('jspmts-component.js'))
        .pipe(gulp.dest('dist/'));

    return stream;
});

gulp.task('minify', function() {
    var stream = gulp.src(paths.main)
        .pipe(jspm({ selfExecutingBundle: true, minify: true })) // `jspm bundle-sfx main`
        .pipe(rename('jspmts-component.min.js'))
        .pipe(gulp.dest('dist/'));

    return stream;
});

gulp.task('test', ['lint'], function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('deploy', ['lint', 'build', 'minify']);

gulp.task('default', ['test']);