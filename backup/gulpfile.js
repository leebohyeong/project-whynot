const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const pug = require('gulp-pug-3');
const autoprefixer = require('gulp-autoprefixer');
const cssimport = require('gulp-cssimport');
const concat = require('gulp-concat');
const argv = require('yargs').argv;
const connect = require('gulp-connect');

const src = './src';
const dest = './dest';

const options = (() => {
    return {
        run: argv['run']
    };
})();

gulp.task('server', () => {
    connect.server({
        port: 8001,
        root: 'dest',
        livereload: true
    });
});

gulp.task('html', () => {
    return gulp.src([

        `${src}/views/web/**/[^_]*.pug`
    ])
        .pipe(pug({
            pretty: false,
        }))
        .pipe(gulp.dest(`${dest}/`));
});

gulp.task('js', () => {
    return gulp.src([
        `${src}/js/web/*.js`
    ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(terser())
        .pipe(gulp.dest(`${dest}/assets/js`));
});

gulp.task('css', () => {
    return gulp.src(`${src}/scss/web/[^_]*.?(s)css`)
        .pipe(sass({
            indentWidth: 4,
            // outputStyle: 'expanded',
            // outputStyle: 'compressed',
            outputStyle: 'compressed',
            includePaths: [
                path.resolve(__dirname, 'node_modules')
            ]
        }))
        .pipe(autoprefixer())
        .pipe(cssimport())
        .pipe(gulp.dest(`${dest}/assets/css`));
});

const runMethods = {
    'server'() {
        gulp.task('default', gulp.series(['css', 'js', 'html', 'server']));
        gulp.watch(`${src}/views/web/**/[^_]*.pug`, gulp.series(['html']));
        gulp.watch(`${src}/scss/web/**/[^_]*.?(s)css`, gulp.series(['css']));
        gulp.watch(`${src}/js/web/*.js`, gulp.series(['js']));
    },
};

runMethods[`${options.run}`]();
