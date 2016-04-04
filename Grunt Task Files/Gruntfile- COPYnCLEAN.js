module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

	
	//COPY
	copy:{
		//target
		build:{
			cwd:'app',
			src:['**','!**/*.js','!**/*.css'],
			dest:'dist',
			expand:true
		}
	},

	//CLEAN
	clean:{
		//target
		build:{
			src:['dist']
		},
		
		//target
		final_clean:{
			src:['dist/css/*.css','!dist/css/*.min.css','dist/js/*.js','!dist/js/*.min.js']
		}
	},

	


});// end grunt config


//load Modules
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');

};