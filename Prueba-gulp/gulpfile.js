 'use strict';

 /* Dependencias*/

 var gulp = require('gulp'),
 	postcss = require('gulp-postcss'),
 	autoprefixer = require('autoprefixer'),
 	sass = require('gulp-sass');
 
 /* Compila archivo y agrega prefijos navegadores */
 gulp.task('sass',function(){
 		var processors = [ 
 		autoprefixer({browsers: ['last 2 versions']})
 		];

 		return gulp.src('./sass/*.scss').pipe(sass().on('error',sass.logError)).pipe(postcss(processors)).pipe(gulp.dest('./css'));
 });