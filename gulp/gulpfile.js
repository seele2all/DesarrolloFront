'use strict';

 /* Dependencias*/

 var gulp = require('gulp'),
     autoprefixer = require('autoprefixer'),
     concat = require('gulp-concat'),
     sass = require('gulp-sass'),
     autoprefixer = require('gulp-uglify'),
     plumber = require('gulp-plumber');

/* Escuchar al propio gulpfile */

gulp.task('default',['watch']);

gulp.task( 'concat-html', function (){
    gulp.src('html/*.html')
      .pipe(concat('todo.html'))
      .pipe(gulp.dest('html/build'));
})


gulp.task( 'concat-js', function (){
    gulp.src('js/source/*.js')
      .pipe(concat('todo.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js/build'));
});

/*sass */
 /* AUTOPREFIXER: Compila archivo y agrega prefijos navegadores */
 /* PRODUCCIÓN: pipe(sass.sync({outputStyle: 'compressed'}).on('error',sass.logError)) */
 gulp.task('sass',function(){
 		var processors = [
 		autoprefixer({browsers: ['last 2 versions']})
 		];
 	 gulp.src('./sass/*.scss')
     .pipe(plumber())
     .pipe(sass.sync().on('error',sass.logError))
     .pipe(gulp.dest('./css'));
 });

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
