// 引入gulp
var gulp = require('gulp');
// 编译sass文件
var sass = require("gulp-sass");

gulp.task("copy-html",function(){
    gulp.src("html/*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\informationSystems\\html"));
});
gulp.task("copy-img",function(){
    gulp.src("img/*.{jpg,png,gif}").pipe(gulp.dest("D:\\phpStudy\\WWW\\informationSystems\\img"));
});
gulp.task("copy-js",function(){
    gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\informationSystems\\js"));
});

gulp.task("sassfile",function(){
    gulp.src("sass/*.scss").pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\informationSystems\\css"))
});

gulp.task("copy-php",function(){
    gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\informationSystems\\php"));
});
// 监听
gulp.task("watchall",function(){
    gulp.watch("html/*.html",["copy-html"]);
    gulp.watch("php/*.php",["copy-php"]);
    gulp.watch("img/*.{jpg,png,gif}",["copy-img"]);
    gulp.watch("sass/*.scss",["sassfile"]);
    gulp.watch("js/*.js",["copy-js"]);
});