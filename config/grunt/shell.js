module.exports = function(grunt) {

  grunt.config.set('shell', {
    cr: {
      command: 'drush cr'
    },
    server: {
        command: 'php <%= pkg.dirs.pl %>/core/console --server'
    },
    generate: {
      command: 'php <%= pkg.dirs.pl %>/core/console --generate'
    }
  });

  grunt.loadNpmTasks('grunt-shell');
};
