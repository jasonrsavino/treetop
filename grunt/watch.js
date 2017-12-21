module.exports = function(grunt) {
  grunt.config.set('watch', {
    configFiles: {
      files: [ 'Gruntfile.js', 'grunt/*.js' ],
      options: {
        reload: true,
        event: ['added', 'deleted', 'changed']
      }
    },
    patternlab: {
      files: [
        'components/_annotations/*.js',
        'components/_data/*.json',
        'components/_meta/*.twig',
        'components/_layouts/*.twig',
        'components/_patterns/**/*.twig',
        'components/_patterns/**/*.json',
        'components/_patterns/**/*.md',
        'components/_twig-components/**/*.php'
      ],
      tasks: ['shell:patternLabBuild'],
      options: {
        event: ['added', 'deleted', 'changed']
      }
    },
    patternlab_style: {
      files: [
        'components/_layouts/**/*.scss',
        'components/_patterns/**/*.scss',
        'components/css/**/*.scss'
      ],
      tasks: ['compass:patternlab','shell:patternLabBuild'],
      options: {
        event: ['added', 'deleted', 'changed']
      }
    },
    patternlab_scripts: {
      files: [
        'components/_patterns/**/*.js',
        'components/js/**/*.js'
      ],
      tasks: ['shell:patternLabBuild'],
      options: {
        event: ['added', 'deleted', 'changed']
      }
    },
    scss: {
      files: [ 'scss/**/*.scss' ],
      tasks: ['compass:treetop'],
      options: {
        event: ['added', 'deleted', 'changed']
      }
    }
  });
  if (grunt.option('alias')) {
    grunt.config.merge({
      watch: {
        treetop: {
          files: [
            'treetop.theme',
            'treetop.*.yml',
            'templates/**/*.html.twig'
          ],
          tasks: ['shell:cacheRebuild']
        },
        patternlab: {
          tasks: ['shell:patternLabBuild', 'shell:cacheRebuild']
        },
        patternlab_style: {
          tasks: ['compass:patternlab','shell:patternLabBuild', 'shell:cacheRebuild']
        },
        patternlab_scripts: {
          tasks: ['shell:patternLabBuild', 'shell:cacheRebuild']
        },
        scripts: {
          files: [ 'js/**/*.js' ],
          tasks: ['shell:cacheRebuild']
        },
        scss: {
          tasks: ['compass:treetop', 'shell:cacheRebuild']
        }
      }
    });
  }

  grunt.loadNpmTasks('grunt-contrib-watch');
};
