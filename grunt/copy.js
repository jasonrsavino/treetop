module.exports = function(grunt) {

  grunt.config.set('copy', {
      assets: {
        expand: true,
        cwd: '../../../core/assets/vendor/normalize-css/',
        src: '**',
        dest: './components/css/assets/vendor/normalize-css/',
        flatten: false
      },
      stable: {
        expand: true,
        cwd: '../../../core/themes/stable/css/',
        src: '**',
        dest: './components/css/stable/css/',
        flatten: false
      },
      classy: {
        expand: true,
        cwd: '../../../core/themes/classy/css/',
        src: '**',
        dest: './components/css/classy/css/',
        flatten: false
      },
      misc: {
        expand: true,
        cwd: '../../../core/misc/',
        src: '**/*.{svg,png,gif,jpg}',
        dest: './components/misc/',
        flatten: false
      }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
