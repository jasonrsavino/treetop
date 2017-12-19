module.exports = function(grunt) {

  grunt.config.set('injector', {
    patternlab: {
      options: {
        prefix: '../../../..',
        postfix: '?{{ cacheBuster }}'
      },
      files: {
        './components/_meta/_00-head.twig': [
            '../../../core/assets/vendor/normalize-css/normalize.css',
            '../../../core/themes/stable/css/system/components/*.css',
            '../../../core/themes/classy/css/components/*.css',
            'components/css/all.css',
            'components/css/layouts.css',
            'css/**/*.css'
        ],
        './components/_meta/_01-foot.twig': [
            'components/drupal/domready/ready.min.js',
            'components/drupal/jquery/dist/jquery.min.js',
            'components/drupal/jquery-once/jquery.once.min.js',
            'components/drupal/drupal/index.js',
            'components/drupal/drupalinit/index.js',
            'components/drupal/drupalSettingsLoader/index.js',
            'js/**/*.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-injector');
};
