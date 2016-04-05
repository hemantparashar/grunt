module.exports = function(grunt){

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

	
	//CONCAT
		concat:{
			options:{
				//seperates the concatenated files via ;\n
				seperator:';\n',
				//puts the project name & version from pkg property &
				//concatenates the result with a newly-generated banner comment
				banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */'
			},

			//target for CSS
			css:{
				//src files
				src:['./app/**/*.css'],
				//destination + name for final o/p file
				dest:'dist/css/styles.css',
				//warn if a given file is missing or invalid
				nonull: true
			},

			//target for JS
			js:{
				src:['./app/**/*.js'],
				dest:'dist/js/scripts.js',
				nonull:true
			},

			//creating multiple files
			multiple_js:{
				//create seperate file red.js and
				//seperate file orange_green.js with green.js and orange.js concatenated
				files:{
					'dist/js/red.js':['./app/js/red.js'],
					'dist/js/orange_green.js':['./app/js/orange.js','./app/js/green.js']
				}
			}

		},	


});// end grunt config


grunt.loadNpmTasks('grunt-contrib-concat');

};