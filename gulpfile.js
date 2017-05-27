'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
var $ = require('gulp-load-plugins')({
    pattern: '*'
});

gulp.task('sass', function () {
    return gulp.src('assets/scss/estilos.scss')
        .pipe(sass({
                errLogToConsole: true,
                sourceComments: 'map',
                sourceMap: 'sass',
                outputStyle: 'expanded'
            })
            .on('error', $.sass.logError))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        server: {
            baseDir: './'
        },
        //tunnel: true,
        //proxy: 'http://localhost:8010',
        port: 3000,
        ghostMode: true,
        open: false
    });
});

gulp.task('html', function () {
    console.log('Editou html');
    return gulp.src('./*.html')
        .pipe(browserSync.reload({
            stream: true
        }));
});



gulp.task('watch', ['browser-sync'], function () {
    console.log('\n########################\n\nhttp://localhost:3000/JornalPucSp-theme/html-modelos/index.html\n\n########################')
    gulp.watch(['assets/scss/**/**/*.scss'], ['sass'],[reload]);
    gulp.watch(['assets/bootstrap/scss/**/*.scss'], ['sass-bootstrap'],[reload]);
    gulp.watch(['*.html'], ['html'],[reload]);
});