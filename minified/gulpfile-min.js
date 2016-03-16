var gulp=require("gulp"),minify=require("gulp-minify"),cleanCSS=require("gulp-clean-css"),htmlmin=require("gulp-htmlmin"),clean=require("gulp-clean");gulp.task("minify-js",function(){gulp.src(["vendor/*.js","*.js","assets/js/*.js"]).pipe(minify({exclude:["tasks"],ignoreFiles:[".combo.js","-min.js"]})).pipe(gulp.dest("minified"))}),gulp.task("minify-css",function(){return gulp.src(["assets/css/*.css","vendor/*.css"]).pipe(cleanCSS({compatibility:"ie8"})).pipe(gulp.dest("minified"))}),gulp.task("minify-html",function(){return gulp.src("*.html").pipe(htmlmin({collapseWhitespace:!0})).pipe(gulp.dest("minified"))}),gulp.task("clean",function(){return gulp.src("minified/*",{read:!1}).pipe(clean())});