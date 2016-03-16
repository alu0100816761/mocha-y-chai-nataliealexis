var minify = require('gulp-minify');

gulp.task('minify', function() {
  gulp.src(['vendor/*.js', '*.js', 'assets/js/*.js'])
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('minified'))
});
