import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";

gulp.src('./source/css/*.css')
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(concat('all.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./public/css'));