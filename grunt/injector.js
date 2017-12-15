module.exports = function(grunt) {

  grunt.config.set('injector', {
    options: {
      prefix: '../../../..',
      postfix: '?{{ cacheBuster }}'
    },
    patternlab: {
      files: {
        './components/_meta/_00-head.twig': [
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
