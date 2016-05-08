  'use strict';

 /* Dependencias*/

 var gulp = require('gulp'),
 	postcss = require('gulp-postcss'),
 	autoprefixer = require('autoprefixer'),
 	sass = require('gulp-sass');

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
