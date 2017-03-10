module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json')
  });

  grunt.loadTasks('config/grunt');

  grunt.registerTask('pl:server', ['shell:server']);
  grunt.registerTask('pl:generate', ['shell:generate']);
  grunt.registerTask('default', ['shell:generate']);
};
