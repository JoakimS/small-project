const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
gulp.task('default', function(done){
    gulp.src("app.js")
    .pipe(eslint())
    .pipe(eslint.format());
    gulp.src("app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
    done()
})