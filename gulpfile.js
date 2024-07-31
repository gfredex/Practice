const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


async function compileSass() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./styles'));
}


function watch() {
    gulp.watch('./scss/**/*.scss', compileSass);
}


exports.compileSass = compileSass;
exports.watch = watch;