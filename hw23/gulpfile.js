const gulp = require('gulp');

const livereload = require('gulp-livereload');

const plumber = require('gulp-plumber');


//html
const htmlmin = require('gulp-htmlmin');
const gulpImport = require('gulp-html-import');

gulp.task('html', () => {
	gulp.src('dev/*.html')
		.pipe(gulpImport('./dev/html/'))
    	.pipe(htmlmin({
    		collapseWhitespace: true,
    	}))
    	.pipe(gulp.dest('site'))
    	.pipe(plumber())
        .pipe(livereload());
});


// style
const autoprefixer = require('gulp-autoprefixer');
gulp.task('style', () => {
	gulp.src('dev/css/style.css')
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	    .pipe(gulp.dest('site'))
	    .pipe(plumber())
        .pipe(livereload());
});


// script
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('script', () => {
	gulp.src(['dev/js/*.js'])
    	.pipe(babel({
            presets: ['env']
        }))
    	.pipe(uglify())
    	.pipe(gulp.dest('site'))
    	.pipe(plumber())
        .pipe(livereload());
});


// watcher
gulp.task('watcher', () => {
    livereload.listen({
       port: 8080,
       host: '127.0.0.1',
       basePath: './site'
    });
    gulp.watch('dev/**/*.html', ['html']);
    gulp.watch('dev/css/**/*.css', ['style']);
    gulp.watch('dev/js/**/*.js', ['script']);
});




// default
gulp.task('default', ['html', 'style', 'script']);
gulp.task('dev', ['default', 'watcher']);