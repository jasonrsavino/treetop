module.exports = function(grunt) {

  grunt.config.set('watch', {
    configFiles: {
      files: [ 'Gruntfile.js', 'grunt/*.js' ],
      options: {
        reload: true
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
      tasks: ['shell:patternLabBuild']
    },
    patternlab_style: {
      files: [
        'components/_patterns/**/*.scss',
        'components/css/**/*.scss'
      ],
      tasks: ['compass:patternlab','shell:patternLabBuild']
    },
    patternlab_scripts: {
      files: [
        'components/_patterns/**/*.js',
        'components/js/**/*.js'
      ],
      tasks: ['shell:patternLabBuild']
    },
    scripts: {
      files: [ 'js/**/*.js' ],
      tasks: []
    },
    scss: {
      files: [ 'scss/**/*.scss' ],
      tasks: ['compass:treetop']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
