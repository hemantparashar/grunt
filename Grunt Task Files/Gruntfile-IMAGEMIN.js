module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

	    //IMAGE-MIN
	     imagemin:{
	     		img: {                         
			      files: [{
			        expand: true,                  // Enable dynamic expansion 
			        cwd: 'dist/images',                   // Src matches are relative to this path 
			        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
			        dest: 'dist/images'                  // Destination path prefix 
			      }]
			    }
	    },

});// end grunt config


//load Modules
grunt.loadNpmTasks('grunt-contrib-imagemin');


};