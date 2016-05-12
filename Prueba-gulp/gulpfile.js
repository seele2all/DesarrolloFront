'use strict';

 /* Dependencias*/

 var gulp = require('gulp'),
 	postcss = require('gulp-postcss'),
 	autoprefixer = require('autoprefixer'),
 	sass = require('gulp-sass'),
  awspublish = require("gulp-awspublish"),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

var fs = require('fs');

/* Escuchar al propio gulpfile */



gulp.task( 'demo', function (){
    gulp.src('js/source/*.js')
      .pipe(concat('todo.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js/build'))
});

/*sass */
 /* AUTOPREFIXER: Compila archivo y agrega prefijos navegadores */
 /* PRODUCCIÓN: pipe(sass.sync({outputStyle: 'compressed'}).on('error',sass.logError)) */
 gulp.task('sass',function(){
 		var processors = [
 		autoprefixer({browsers: ['last 2 versions']})
 		];
 		return gulp.src('./sass/*.scss').pipe(sass.sync().on('error',sass.logError)).pipe(gulp.dest('./css'));
 });

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

/* Github pages */
gulp.task('gh-p', function() {
  return gulp.src('/')
    .pipe(ghPages());
});

/* aws s3*/
gulp.task('s3', function() {
  var publisher = awspublish.create({
    region: 'sa-east-1',
    params: {
      Bucket: 'krouw.s3-website-sa-east-1.amazonaws.com'
    },
    accessKeyId: 'AKIAIKGUD2MBKGTVZC2Q',
    secretAccessKey: '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'
  });
  return gulp.src('./sass/**')
             .pipe(publisher.publish())
             .pipe(publisher.sync());

});
