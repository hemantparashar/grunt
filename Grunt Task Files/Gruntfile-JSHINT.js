module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

	
	//JS-HINT
		jshint:{
			options:{
				//jshint overriden options specified in .jshintrc file
				jshintrc:'.jshintrc',
				//jshint output stylized
				reporter:require('jshint-stylish')
			},
			all:['Gruntfile.js','./app/**/*.js']
		}

	
});// end grunt config


//load JsHint
grunt.loadNpmTasks('grunt-contrib-jshint');

};