var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlMin = require('gulp-htmlmin');
var imageMin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('reload',function(){
  browserSync.reload();
});

gulp.task('serve',['sass'] , function(){
  browserSync({
    server:'src'
  });
  gulp.watch('src/*.html',['reload']);
  gulp.watch('src/scss/**/*.scss',['sass']);
});

gulp.task('sass', function(){
  return gulp.src('src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 3 versions']
  }))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream())
});

gulp.task('css',function(){
  return gulp.src('src/css/**/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('js',function(){
  return gulp.src('src/js/**/*.js')
  //.pipe(concat('script.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function(){
  return gulp.src('src/*.html')
  .pipe(htmlMin({
    sortAttributes: true,
    sortClassName: true,
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'));
});

gulp.task('img', function(){
  return gulp.src('src/img/**/*.{jpg,jpeg,png,gif}')
  .pipe(changed('dist/img'))
  .pipe(imageMin())
  .pipe(gulp.dest('dist/img'))
});

gulp.task('default',['serve']);
