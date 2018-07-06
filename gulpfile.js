var gulp = require('gulp');
var concatCSS = require('gulp-concat-css');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
// var sass = require('gulp-sass');
// var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
// var plumber = require('gulp-plumber');


//ConcatCSS 
gulp.task('concat', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCSS(''))
    // .pipe(minifyCSS(''))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('app/'))
    .pipe(browsersync.stream());
});


//Static Server + watching html/scss files
gulp.task('serve', function() {

	browserSync.init({
		server: "./app"
	});

	gulp.watch("app/css/*.css", ['concat']);
	gulp.watch("app/**/*.less", ['less']);
	// gulp.watch("app/**/*.scss", ['sass']);
	//temp for slick
	gulp.watch("app/css/slick.css").on('change', browserSync.reload);
	gulp.watch("app/js/*.*").on('change', browserSync.reload);
	gulp.watch("app/*.*").on('change', browserSync.reload);
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
	gulp.src('app/less/*.less')
		//.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
// 	gulp.src('app/scss/*.scss')
// 		//.pipe(plumber())
// 		.pipe(sass())
// 		.pipe(gulp.dest('app/css'))
// 		.pipe(browserSync.stream());
// });

gulp.task('default', ['serve']);