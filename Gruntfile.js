module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json')
  });

  grunt.loadTasks('grunt');

  if (grunt.file.exists('./pattern-lab')) {
    grunt.registerTask('buildPatternLab', [
      'shell:patternLabInstall',
      'shell:patternLabBuild'
    ]);
  }
  else {
    grunt.registerTask('buildPatternLab', []);
  }

};
