var gulp = require("gulp");
const postcss = require("gulp-postcss");
const precss = require("precss");
const autoprefixer = require("autoprefixer");
const postcssNested = require("postcss-nested");

gulp.task("css", function () {
  return gulp
    .src("./postCss/*.css")
    .pipe(postcss([autoprefixer(), precss(), postcssNested()]))
    .pipe(gulp.dest("./css"));
});

gulp.task("default", gulp.series("css"));
