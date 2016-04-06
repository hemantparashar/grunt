module.exports = function(grunt){

//time grunt module - shows time taken to process by the grunt tasks
//not required
require('time-grunt')(grunt);

//configure grunt
grunt.initConfig({

	//put all the package.json info about the project in pkg property
	pkg:grunt.file.readJSON('package.json'),

	
		//COPY
		copy:{
			//target
			build:{
				cwd:'app',
				src:['**','!js/**/*.js','!css/**/*.css'],
				dest:'dist',
				expand:true
			}
		},

		//CLEAN
		clean:{
			build:{
				src:['dist']
			},

			final_clean:{
				src:['dist/css/*.css','dist/js/*.js','!dist/css/**/*.min*.css','!dist/js/**/*.min*.js']
			}
		},

		//JS-HINT
		jshint:{
			options:{				
				jshintrc:'.jshintrc',				
				reporter:require('jshint-stylish'),
			},
			all:['Gruntfile.js','./app/**/*.js']
		},

	
		//CONCAT
		concat:{
			options:{
				//seperates the concatenated files via ;\n
				seperator:';\n',
				//puts the project name & version from pkg property &
				//concatenates the result with a newly-generated banner comment
				banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},

			//target for CSS
			css:{
				src:['./app/**/*.css'],     //src files
				dest:'dist/css/styles.css', //destination + name for final o/p file
				nonull: true				//warn if a given file is missing or invalid
			},

			//target for JS
			js:{
				src:['./app/**/*.js'],
				dest:'dist/js/scripts.js',
				nonull:true
			},

		},


		//UGLIFY
		uglify:{
			//target
			js:{
				files:{
					'dist/js/scripts.min.js':['dist/js/scripts.js']
				}
			}
		},

		//AUTO-PREFIXER
		postcss: {
			options: {
			    processors: [
			      require('autoprefixer')({browsers: ['last 10 versions','ie 8','ie 9']})
			    ]
			},

			autoprefix:{
			    src: 'dist/css/styles.css'
			}
		},


		//CSS-MINIFY
		cssmin: {
		 	options:{
				shorthandCompacting: false,
				roundingPrecision: -1
			  },

			css:{
			    files:{
			      'dist/css/styles.min.css': ['./dist/css/styles.css']
			    }
			}
		},

		//PROCESS HTML
		processhtml:{
			options: {
			      data: {
			        message: 'Hello world!'
			      }
			 },
			//target
			html:{      
				files: {
				        'dist/index.html': ['./app/index.html']
				      }
			}
		},

	    //IMAGE-MIN
	     imagemin:{
	     		img: {                         
			      files: [{
			        expand: true,                  // Enable dynamic expansion 
			        cwd: 'dist/images',            // Src matches are relative to this path 
			        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
			        dest: 'dist/images'            // Destination path prefix 
			      }]
			    }
	    },


		//WATCH
		watch:{
			options: {
			    livereload: true
			},
			
			copy: {
		            files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
		            tasks: [ 'build' ]
		    },

			//JS target
			js:{
				files:['./app/js/*.js'],
				tasks:['build']
			},

			//CSS target
			css:{
				files:['./app/css/*.css'],
				tasks:['build']
			},
			
		},

		//CONNECT
		connect: {
		    options: {
		        port: 9000,
		        livereload: 35729,
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

grunt.registerTask('build', [
		'clean:build',
		'jshint',
		'concat',
		'postcss',
		'cssmin',
		'uglify',
		'copy',
		'imagemin',
		'processhtml',
		'clean:final_clean'
]);


grunt.registerTask('serve',['build','connect:dist','watch']);
grunt.registerTask('default',['build']);


//load Modules
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-postcss');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-processhtml');

};