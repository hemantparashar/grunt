module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

		// FILEREV
	    filerev: {
	        options: {
	            encoding: 'utf8',
	            algorithm: 'md5',
	            length: 20
	        },
	        release: {
	            // filerev:release hashes(md5) all assets (images, js and css )
	            // in dist directory
	            files: [{
	                src: [
	                    'dist/js/*.js',
	                    'dist/css/*.css'
	                ]
	            }]
	        }
	    },

		

});// end grunt config


//load Modules
grunt.loadNpmTasks('grunt-filerev');


};