module.exports = function(grunt) {

  grunt.config.set('http', {
    pageNode: {
      options: {
        url: 'http://d8sandbox.test/node/2/pattern',
        callback: parseResult
      },
      dest: 'components/_patterns/02-organisms/20-content/node~page-2.json'
    }
  });

  function parseResult(error, response, body) {
    if (response.statusCode == 200) {
      var str = body;
      body = str.substring(1, str.length - 1);
    }
    console.log(body);
    return body;
  };
  grunt.loadNpmTasks('grunt-http');
};
