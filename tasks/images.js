var gulp = require('gulp');
var plumber = require('gulp-plumber');
var notifyer = require('./utils/notifyer');
var paths = require('./utils/paths');
var handlers = require('./utils/handlers');

// Images task
module.exports = function() {
  return gulp.src(paths.sources.images)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onGenericError
    }))
    .pipe(gulp.dest(paths.dist.images))
    // Notify for live reload
    .pipe(notifyer.reload())
  ;
};
