module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

		//CSS-MINIFY
		cssmin: {
		 	options:{
		 		//conversion of css to their shorthand notations disabled
				shorthandCompacting: false,
				//rounding precision disabled
				roundingPrecision: -1
			  },

			css:{
			    files:{
			      'dist/css/main.min.css': ['./dist/css/*.css']
			    }
			}
		},



});// end grunt config


//load Modules
grunt.loadNpmTasks('grunt-contrib-cssmin');

};