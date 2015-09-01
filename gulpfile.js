'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

gulp.task('default', ['mocha', 'jshint']);

gulp.task('mocha', function(){
  return gulp.src('test/**/*test.js')
    .pipe(mocha());
});

gulp.task('jshint', function() {
  return gulp.src(['./lib/**/*.js', './test/**/*.js', './bin/**/*.js', './*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function (){
  return gulp.watch(['./lib/**/*.js', './test/**/*.js', './bin/**/*.js', './*.js'], ['jshint']);
});
