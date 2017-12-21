module.exports = function(grunt) {

  grunt.config.set('injector', {
    patternlab: {
      options: {
        prefix: '../..',
        postfix: '?{{ cacheBuster }}',
        ignorePath: 'components'
      },
      files: {
        './components/_meta/_00-head.twig': [
            'components/css/assets/vendor/normalize-css/normalize.css',
            'components/css/stable/css/**/*.css',
            'components/css/classy/css/**/*.css',
            'components/css/all.css',
            'components/css/layouts.css'
        ],
        './components/_meta/_01-foot.twig': [
            'components/drupal/domready/ready.min.js',
            'components/drupal/jquery/dist/jquery.min.js',
            'components/drupal/jquery-once/jquery.once.min.js',
            'components/drupal/drupal/index.js',
            'components/drupal/drupalinit/index.js',
            'components/drupal/drupalSettingsLoader/index.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-injector');
};
