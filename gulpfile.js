

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var babel = require('gulp-babel');

sass.compiler = require('node-sass');

// Create a static server and watch files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch("./**/*.html").on('change', browserSync.reload);
});

// Compile SCSS into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

// Compile ES6 & auto-inject into browsers
gulp.task('js', function () {
  gulp.src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.stream());
})

gulp.task('default', ['serve']);  