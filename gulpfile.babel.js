import gulp from 'gulp';
import config from './gulp/config.js';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import {scriptsBuild, scriptsWatch} from './gulp/tasks/scripts';
import {htmlBuild, htmlWatch} from './gulp/tasks/html';
import {sassBuild, sassWatch} from './gulp/tasks/style';
import {assetsBuild, assetsWatch} from './gulp/tasks/assets';
import {imagesBuild, imagesWatch} from './gulp/tasks/images';

config.setEnv();

export const build = gulp.series(
    clean,
    gulp.parallel(
        scriptsBuild,
        htmlBuild,
        sassBuild,
        assetsBuild,
        imagesBuild,
    )
);

export const watch = gulp.series(
    build,
    server,
    gulp.parallel(
        scriptsWatch,
        htmlWatch,
        sassWatch,
        assetsWatch,
        imagesWatch
    )
);

exports.assetsWatch = assetsWatch;