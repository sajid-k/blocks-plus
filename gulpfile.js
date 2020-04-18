/**
 * Gulpfile.
 *
 * Implements:
 *   1. CSS:
 *    a. Sass to CSS conversion
 *    b. Autoprefixing
 *    c. Rename
 *    d. Sourcemaps
 *    e. Error catching
 *   2. Images: Minifies all images.
 *   3. Generate .pot file.
 *   4. Watches files for changes in Sass.
 */

const gulp         = require('gulp');
const sourcemaps   = require('gulp-sourcemaps');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
sass.compiler      = require('node-sass');

var paths = {
  front: {
    css: {
      src: 'src/front/sass/style.scss',
      dest: 'assets/front/css/'
    },
    js: {
      src: 'src/front/js/**/*.js',
      dest: 'assets/front/js/'
    }
  },
  admin: {
    css: {
      src: 'src/admin/sass/admin.scss',
      dest: 'assets/admin/css/'
    },
    js: {
      src: 'src/admin/js/**/*.js',
      file: 'cta.js',
      folder: 'src/admin/js/',
      dest: 'assets/admin/js/'
    }

  }
};

/**
 * Converting Sass into css
 * Applying autoprefixer
 * Creatings sourcemaps
 */
function css(done) {
  // Main Style
  return gulp.src( paths.front.css.src )
  .pipe( sourcemaps.init() )
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe( autoprefixer() )
  .pipe( sourcemaps.write( '.' ) )
  .pipe( gulp.dest( paths.front.css.dest ) );

  done();
};

function watch_files() {
  gulp.watch( paths.front.css.src, css );
  // gulp.watch( paths.admin.js.src, js );
}

gulp.task( 'css', css );
// gulp.task( 'js', js );
// gulp.task( 'default', gulp.parallel(css, js) );
gulp.task( 'watch', watch_files );
