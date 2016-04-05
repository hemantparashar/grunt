module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

		//WATCH
		watch:{
			options: {
				//Browser refresh the project when changes are made
			    livereload: true
			},
			
			copy: {
				//copy everything except the js and css files
		        files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
		        tasks: [ '...' ]
		    },

			//JS target
			js:{
				files:['./app/js/*.js'],
				tasks:['...']
			},

			//CSS target
			css:{
				files:['./app/css/*.css'],
				tasks:['...']
			},
			
		},




});// end grunt config


//load Modules
grunt.loadNpmTasks('grunt-contrib-watch');

};