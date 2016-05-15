const gulp = require('gulp');
const jade = require('gulp-jade');
const sass = require('gulp-sass');


gulp.task('default', ['jade', 'sass', 'js']);

gulp.task('jade', function() {

  gulp.src('./dev/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', () => {
  gulp.src('./dev/sass/main.scss')
      .pipe( sass() )
      .pipe( gulp.dest('./dist/css/') );
});

gulp.task('js', () => {
  gulp.src('./dev/js/**/*.js')
      .pipe( gulp.dest('./dist/js/'));
});

gulp.task('watch', function(){
  gulp.watch('./dev/sass/main.scss', ['sass']);
  gulp.watch('./dev/*.jade', ['jade']);
  gulp.watch('./dev/js/*.js', ['js']);
});
