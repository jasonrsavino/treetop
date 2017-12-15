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
      'injector:patternlab',
      'shell:patternLabBuild'
    ]);
  }
  else {
    grunt.registerTask('buildPatternLab', []);
  }

  grunt.registerTask('install', ['buildPatternLab']);
  grunt.registerTask('default', ['buildPatternLab', 'compass:treetop', 'watch']);

};
