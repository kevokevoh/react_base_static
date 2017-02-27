var gulp = require('gulp');
require('gulp-load-plugins')();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var gplumber = require('gulp-plumber');

var errorHandler = function(){
    // default appearance
    return gplumber(function(error){
        // add indentation
        var msg = error.codeFrame.replace(/\n/g, '\n    ');
        gutil.log('|- ' + 'Build Error in ' + error.plugin);
        gutil.log('|- ' + error.message);
        gutil.log('|- ' + '>>>');
        gutil.log('|\n    ' + msg + '\n           |');
        gutil.log('|- ' + '<<<');
    });
};

//Compile sass
gulp.task('sass', function () {
  gulp.src('app/src/scss/*.scss')
        .pipe(sass.sync({includePaths: ['app/src/scss/partials'], outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('app/dist/css'));
});

//Concatenate scripts
gulp.task('scripts', function() {
  return gulp.src([
    'app/src/js/assets/custom.js',
  ])
    .pipe(errorHandler())
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/js/assets'));
});

//Watch for changes
gulp.task('watch', function() {
  gulp.watch(['app/src/scss/*.scss','app/src/scss/partials/*'], ['sass']);
  gulp.watch('app/src/js/assets/**', ['scripts']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['sass','scripts','watch']);
