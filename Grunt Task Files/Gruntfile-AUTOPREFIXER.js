module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

	
		//AUTO-PREFIXER
		postcss: {
			options: {
			    processors: [
			      require('autoprefixer')({browsers: ['last 10 versions','ie 8','ie 9']})
			    ]
			},

			autoprefix:{
			    src: 'dist/**/*.css'
			}
		},

		

});// end grunt config


//load Modules
grunt.loadNpmTasks('grunt-postcss');

};