module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json')
  });

  grunt.loadTasks('grunt');

  if (grunt.file.exists('./pattern-lab')) {
    grunt.registerTask('buildPatternLab', [
      'shell:patternLabInstall',
      'compass:patternlab',
      'bowercopy:patternlab',
      'copy',
      'injector:patternlab',
      'shell:patternLabBuild'
    ]);
  }
  else {
    grunt.registerTask('buildPatternLab', []);
  }

  grunt.registerTask('install', ['buildPatternLab']);

  if (grunt.option('alias')) {
    grunt.registerTask('default', ['install', 'compass:treetop', 'shell:cacheRebuild', 'watch']);
  }
  else {
    grunt.registerTask('default', ['install', 'compass:treetop', 'watch']);
  }

};
