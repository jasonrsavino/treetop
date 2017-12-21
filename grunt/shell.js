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

  if (grunt.option('alias')) {
    var alias = grunt.option('alias');
    if (typeof(alias) === 'boolean') {
      alias = 'default';
    }
    grunt.config.merge({
      shell: {
        cacheRebuild: {
          command: 'drush ' + alias + ' cr',
        }
      }
    });
  }

  grunt.loadNpmTasks('grunt-shell');
};
