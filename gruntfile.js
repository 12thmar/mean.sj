'use strict';

module.exports = function (grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
			default: ['nodemon', 'watch'],
			debug: ['nodemon', 'watch', 'node-inspector'],
			options: {
				logConcurrentOutput: true,
				limit: 10
			}
		}
     
    });

   // Load NPM tasks
	require('load-grunt-tasks')(grunt);
    // Making grunt default to force in order not to break the project.
	
	grunt.option('force', true);

    grunt.registerTask('default', ['concurrent']);
}