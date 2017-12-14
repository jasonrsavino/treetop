module.exports = function(grunt) {

  grunt.config.set('compass', {
    options: {
      require: ['sass-globbing'],
      sourcemap: false,
      outputStyle: 'expanded',
      relativeAssets: true
    },
    treetop: {
      options: {
        basePath: '.',
        imagesDir: './images',
        javascriptsDir: './js',
        fontsDir: './fonts',
        sassDir: './scss',
        cssDir: './css'
      }
    },
    patternlab: {
      options: {
          basePath: './components',
          imagesDir: 'images',
          javascriptsDir: 'js',
          fontsDir: 'fonts',
          sassDir: 'css',
          cssDir: 'css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
