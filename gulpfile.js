var gulp    = require('gulp');
var fc2json = require('gulp-file-contents-to-json');

gulp.task('create-icon-sprite', function() {
  gulp.src('app/assets/icons/svg_files/**/*')
		.pipe(fc2json('icon-sprite.json'))
		.pipe(gulp.dest('app/assets/icons/'));
});