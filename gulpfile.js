var gulp = require("gulp");
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

//logging message
function message(done) {
    console.log("passed!");
    done();
}
message.desctiption = "sanity tset";
gulp.task('message', message);

//copyHtml
gulp.task('copyHtml', () =>
	gulp.src('*.html')
		.pipe(gulp.dest('dist'))
);

//image min task
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

//concat and minify js
gulp.task('concat&minify', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//sass
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

//default task
gulp.task('default', gulp.parallel('message', 'copyHtml', 'imageMin', 'concat&minify', 'sass'));

//watch task
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', gulp.parallel('concat&minify'));
    gulp.watch('src/images/*', gulp.parallel('imageMin'));
    gulp.watch('src/sass/*.scss', gulp.parallel('sass'));
    gulp.watch('*.html', gulp.parallel('copyHtml'));
});