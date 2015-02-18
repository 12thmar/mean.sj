'use strict';

module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
        	options: {
        		force: true
        	},
        	output:['../Source/*/obj/debug']
        }
     
    });

   // Load NPM tasks
	require('load-grunt-tasks')(grunt);
    // Making grunt default to force in order not to break the project.
	
	grunt.option('force', true);

    grunt.registerTask('default', ['clean']);
}