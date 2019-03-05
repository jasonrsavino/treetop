/* globals require */

'use strict';
var gulp = require('gulp-help')(require('gulp'));
var localConfig = {};

var sass = require('gulp-sass');

// sass function.
gulp.task('sass', function() {
  return gulp.src('components/_patterns/**/*.scss') // Gets all files ending with .scss in /scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

// watch function.
gulp.task('watch', function(){
  gulp.watch('components/_patterns/**/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'watch']);
