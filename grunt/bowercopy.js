module.exports = function(grunt) {

  grunt.config.set('bowercopy', {
    patternlab: {
      options: {
        destPrefix: 'components/drupal/',
      },
      files: {
        'domready/ready.min.js': 'domready/ready.min.js',
        'drupal/index.js': 'drupal/index.js',
        'drupalinit/index.js': 'drupalinit/index.js',
        'jquery/dist/jquery.min.js': 'jquery/dist/jquery.min.js',
        'jquery-once/jquery.once.min.js': 'jquery-once/jquery.once.min.js',
        'drupalSettingsLoader/index.js': 'drupalSettingsLoader/index.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bowercopy');
};
