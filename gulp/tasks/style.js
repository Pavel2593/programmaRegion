import gulp from 'gulp';
import sassCompiler from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import config from './../config';

const sass = gulpSass(sassCompiler);

export const sassBuild = () => (
    gulp.src(`${config.src.sass}/_lib/*`)
        .pipe(gulp.dest(`${config.dest.css}/lib`)),
    gulp.src(`${config.src.sass}/main.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCss({level:2}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest.css))
)

export const sassWatch = () => {
    gulp.watch(
        [
            `${config.src.sass}/**/*.scss`,
            `${config.src.root}/templates/**/*.scss`,
        ],
        sassBuild
    )
}