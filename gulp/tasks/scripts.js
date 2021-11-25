import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import config from './../config';

export const scriptsBuild = () => (
    browserify(`${config.src.js}/main.js`, { debug: true })
        .transform('babelify', { presets: ['@babel/preset-env'] })
        .bundle()
        .pipe(source('main.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest.js))
)

export const scriptsWatch = () => {
    gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild);
}