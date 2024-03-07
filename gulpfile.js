let gulp = require('gulp'),
    watch = require("gulp-watch"),
    prefixer = require("gulp-autoprefixer"),
    terser = require('gulp-terser'),
    concat = require("gulp-concat"),
    sass = require('gulp-sass')(require('sass')),
    cleanCSS = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    rename = require("gulp-rename")
    // rimraf = require("gulp-rimraf")
;

let path = {
    src: {
        scss: '_develop/scss/',
        js: '_develop/_js/',
        npm: 'node_modules/'
    },
    dest: {
        css: '_build/assets/games/oldApartment/css',
        js: '_build/assets/games/oldApartment/js/'
    },
    watch: {
        scss: '_develop/scss/',
        js: '_develop/_js/'
    }
};

/*----------  SCSS  ----------*/

gulp.task('main-scss', function(){
    return gulp.src(path.src.scss + 'main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('.', {
            addComment: true,
            mapFile: function(mapFilePath) {
                return mapFilePath.replace('.scss', '.map');
            }
        }))
        .pipe(gulp.dest(path.dest.css));
    // .pipe(browserSync.reload({
    //     stream: true
    // }));
});

/*----------  JS  ----------*/
gulp.task('app-js', function(){
    return gulp.src([
        path.src.js + 'About.js',
        path.src.js + 'Sounds.js',
        path.src.js + 'Intro.js',
        path.src.js + 'ChoiceCategory.js',
        path.src.js + 'Category.js',
        path.src.js + 'Question.js',
        path.src.js + 'ArrowsAll.js',
        path.src.js + 'Settings.js',
        path.src.js + 'questCat_1.js',
        path.src.js + 'questCat_2.js',
        path.src.js + 'questCat_3.js',
        path.src.js + 'questCat_4.js',
        path.src.js + 'questCat_5.js',
        path.src.js + 'app.js'
    ])
        .pipe(concat('app.js'))
        .pipe(terser())
        .pipe(rename({suffix: "-min"}))
        .pipe(gulp.dest(path.dest.js));
});

gulp.task('vendor-js', function(){
    return gulp.src([
        path.src.npm + 'gsap/dist/' + 'gsap.js',
        path.src.npm + 'gsap/dist/' + 'ScrollToPlugin.js',
        path.src.npm + 'gsap/dist/' + 'ScrollTrigger.js',
        path.src.npm + 'imagesloaded/' + 'imagesloaded.pkgd.js',
        path.src.js + 'vendor.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(terser())
        .pipe(rename({suffix: "-min"}))
        .pipe(gulp.dest(path.dest.js));
});

/*----------  Watch  ----------*/

gulp.task('watch', function() {
    gulp.watch(path.watch.scss + '*.scss', gulp.series('main-scss'));
    gulp.watch(path.watch.js + 'vendor.js', gulp.series('vendor-js'));
    gulp.watch([path.watch.js + 'app.js',
        path.watch.js + 'Sounds.js',
        path.watch.js + 'Intro.js',
        path.watch.js + 'Category.js',
        path.watch.js + 'ChoiceCategory.js',
        path.watch.js + 'Question.js',
        path.watch.js + 'Quest.js',
        path.watch.js + 'ArrowsAll.js',
        path.watch.js + 'About.js',
        path.watch.js + 'Settings.js',
        path.watch.js + 'questCat_1.js',
        path.watch.js + 'questCat_2.js',
        path.watch.js + 'questCat_3.js',
        path.watch.js + 'questCat_4.js',
        path.watch.js + 'questCat_5.js'
    ], gulp.series('app-js'));
    // gulp.watch(path.watch.js + 'jgrowl.js', gulp.series('jgrowl-js'));

    // gulp.watch(path.dest.css + '/js/**/*.js', browserSync.reload);
});

// gulp.task("default", ["main-scss", "main-js", "watch"]);