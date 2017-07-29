'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

const dirs = {
  src: 'src/**/*.js',
  dest: 'dist/',
};

gulp.task('default', () => {
  return gulp.src(dirs.src)
    .pipe(babel())
    .pipe(gulp.dest(dirs.dest));
});
