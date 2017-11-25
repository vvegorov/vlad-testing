var  gulp = require('gulp');
var  browserSync = require('browser-sync').create();
var  pug = require('gulp-pug');
var  sass = require('gulp-sass');
var  spritesmith = require('gulp.spritesmith');
var  rimraf = require('rimraf');
var  rename = require('gulp-rename');




/* -------- Server  -------- */
gulp.task('server', function() {
  browserSync.init({
    server: {
      port: 9000,
      baseDir: "build"
    }
  });

  gulp.watch('build/**/*').on('change', browserSync.reload);
});
