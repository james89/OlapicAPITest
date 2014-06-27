var gulp = require('gulp')

var usemin = require('gulp-usemin')
var minifycss = require('gulp-minify-css')


gulp.task('copy', function() {
  gulp.src('./public/lib/fontawesome/fonts/*.*')
   .pipe(gulp.dest('./build/fonts'))
  gulp.src('./public/images/*.*')
    .pipe(gulp.dest('./build/images'))
});

gulp.task('usemin', ['copy'], function(){
  gulp.src('./public/index.html')
    .pipe(usemin({
      js : [],
      css : [minifycss(), 'concat']
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('default', ['usemin'])

