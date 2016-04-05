module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),


		//UGLIFY
		uglify:{
			//target
			js:{
				files:{
					'dist/js/main.js':['dist/js/scripts.js']
				}
			}
		},	


});// end grunt config


//load Modules
grunt.loadNpmTasks('grunt-contrib-uglify');

};