const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
function optimizeImages(done){
gulp.src('img-noRender/**/*')
.pipe(imagemin())
.pipe(gulp.dest('uoc/img'))
done();
}
var resourcesOptimization = gulp.series(optimizeImages);
gulp.task('build', resourcesOptimization);
gulp.task('default', resourcesOptimization);