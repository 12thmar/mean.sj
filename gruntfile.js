'use strict';

module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
     
    });

   // Making grunt default to force in order not to break the project.
	grunt.option('force', true);

    grunt.registerTask('default', ['']);
}