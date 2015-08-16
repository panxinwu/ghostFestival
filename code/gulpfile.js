var gulp = require('gulp');

// 引入组件
var less = require('gulp-less'),            // less
    minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'),        // js压缩
    concat = require('gulp-concat'),        // 合并文件
    rename = require('gulp-rename');        // 重命名
    clean = require('gulp-clean');          //清空文件夹

// less解析
gulp.task('build-less', function(){
  gulp.src(['./css/index.less','./css/share.less','./css/again.less'])
    .pipe(less())
    .pipe(gulp.dest('./css'))
});

// 合并、压缩、重命名css
gulp.task('stylesheets',['build-less'],function() {
  gulp.src(['./css/index.css'])
    .pipe(gulp.dest('./css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});

// 合并，压缩js文件
gulp.task('javascripts', function() {
  gulp.src(['./js/zepto.min.js','./js/touch.js','./js/fx.js','./js/rem.min2.js','./js/halo.15.01.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dest/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'));
});
// 合并，压缩js文件
gulp.task('sharejavascripts', function() {
  gulp.src(['./js/zepto.min.js','./js/fx.js','./js/rem.min.js','./js/halo.15.01.js',])
    .pipe(concat('share.js'))
    .pipe(gulp.dest('./dest/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'));
});
// 清空图片、样式、js
gulp.task('clean', function() {
  return gulp.src(['./index.min.css','./index.css'], {read: false})
    .pipe(clean({force: true}));
});


//定义develop任务在日常开发中使用
gulp.task('develop',['clean'],function(){
  gulp.run('build-less','stylesheets');

  gulp.watch('./css/*.less',['build-less']);
});

// 定义一个prod任务作为发布或者运行时使用
// gulp.task('prod',function(){
//   gulp.run('buildlib','build-less','stylesheets','javascripts');

//   // 监听.less文件,一旦有变化,立刻调用build-less任务执行
//   gulp.watch('./javis/static/less/*.less', ['build-less']);
// });

// gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
gulp.task('default',['clean'], function() {
  gulp.run('develop');
});