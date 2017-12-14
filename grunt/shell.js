module.exports = function(grunt) {

  grunt.config.set('shell', {
    patternLabInstall: {
      command: 'composer install',
      options: {
        execOptions: {
          cwd: './pattern-lab'
        }
      }
    },
    patternLabBuild: {
      command: 'php core/console --generate',
      options: {
        execOptions: {
          cwd: './pattern-lab'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
};
