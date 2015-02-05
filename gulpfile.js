// Include gulp & plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');

gulp.task('styles', function(){
    return gulp.src('assets/scss/main.scss')
    .pipe(plumber())
    .pipe(compass({
        sass: 'assets/scss',
        css: 'assets/css',
        image: 'assets/img',
        style: 'expanded',
        relative: true,
        require: ['susy', 'breakpoint']
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'))
    .pipe(livereload())
    .pipe(notify({ message: 'Styles compiled' }))
});

// Lint Task
// gulp.task('lint', function() {
//     return gulp.src('source/js/src/**/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('scripts.js'))
//      .pipe(livereload())
//      .pipe(rename('scripts.min.js'))
//      .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
        .pipe(notify({ message: 'Scripts compiled' }))
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/css/style.css').on('change', livereload.changed);
    // Watch .scss files
    gulp.watch('assets/scss/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('assets/js/**/*.js', ['scripts']);

  // Watch image files
 // gulp.watch('src/images/**/*', ['images']);

});

// gulp.task('images', function() {
//   return gulp.src('source/images/**/*')
//     .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
//     .pipe(gulp.dest('source/images'))
//     .pipe(notify({ message: 'Images task complete' }));
// });
// Default Task
gulp.task('default', ['styles', 'scripts', 'watch']);
