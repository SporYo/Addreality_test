var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');


gulp.task('css', function(){
  return gulp.src('styles/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/'))
});

gulp.task('default', [ 'css' ]);