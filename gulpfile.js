var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var minHTML = require('gulp-htmlmin');

gulp.task('styles', function(){
    gulp.src('css/**/*.css')
        .pipe(cleanCSS())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
    gulp.src('js/**/*.js')
        .pipe(concat('logic.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-html', function(){
    gulp.src('./index.html')
        .pipe(minHTML({collapsedWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-imgs', function(){
    gulp.src('img/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('copy-fonts', function(){
    gulp.src('fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build',[
    'styles',
    'scripts',
    'copy-html',
    'copy-imgs',
    'copy-fonts'
]);