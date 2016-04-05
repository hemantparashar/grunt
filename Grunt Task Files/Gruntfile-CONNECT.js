module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

	

		//CONNECT
		connect: {
		    options: {
		        port: 9000,
		        livereload: 35729,//or true
		        hostname: 'localhost'
		    },

		    dist: {
		        options: {
		          open: true,
		          base:{
		            path: 'dist',
		            options: {
		                index: 'index.html',
		                // maxAge: 300000
		            }
		          }
		        }
		    }
		},



});// end grunt config



//load Modules
grunt.loadNpmTasks('grunt-contrib-connect');

};