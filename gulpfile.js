var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
  browserSync({
    port: 1024,
    files: ['./www'],
    server: {
      baseDir: "./www"
    }
  });
});


