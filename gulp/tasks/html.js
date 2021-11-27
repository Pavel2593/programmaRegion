import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import config from './../config';

export const htmlBuild = () => (
    gulp.src(`${config.src.html}/**/*.html`)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(`${config.dest.html}`))
)

export const htmlWatch = () => {
    gulp.watch(
        [
            `${config.src.html}/**/*.html`,
            `${config.src.root}/**/*.html`,
        ],
        htmlBuild
    )
}