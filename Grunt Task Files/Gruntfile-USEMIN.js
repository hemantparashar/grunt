'use strict';

module.exports = function(grunt){
	
	//time-grunt
	require('time-grunt')(grunt);

	//jit-grunt
	require('jit-grunt')(grunt, {
		useminPrepare:'grunt-usemin'
	});

	//configuration for all the tasks
	grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),

    // Make sure code styles are up to par and there are no obvious mistakes
				
				//CLEAN    			
			    clean: {
			        build:{
			            src: [ 'dist/']
			        }
			    },

    			//COPY
    			copy: {
			      dist: {
			        cwd: 'app',
			        src: [ '**','!css/**/*.css','!js/**/*.js' ],
			        dest: 'dist',
			        expand: true
			      },
			      fonts: {
			          files:[
			              {
			                  //for bootstrap fonts
			                    expand: true,
			                    dot: true,
			                    cwd: 'bower_components/bootstrap/dist',
			                    src: ['fonts/*.*'],
			                    dest: 'dist'
			                }, {
			                    //for font-awesome
			                    expand: true,
			                    dot: true,
			                    cwd: 'bower_components/font-awesome',
			                    src: ['fonts/*.*'],
			                    dest: 'dist'
			                }
			          ]
			        }
			    },


    			//JS-HINT
			    jshint: {
			      options: {
			        jshintrc: '.jshintrc',
			        reporter: require('jshint-stylish')
			      },
			      //target
			      all: {
			        src: [
			          'Gruntfile.js',
			          'app/js/{,*/}*.js'
			        ]
			      }
			    },
			    
			    //USEMIN-PREPARE
			    useminPrepare: {
			        html: 'app/index.html',
			        options: {
			            dest: 'dist'
			        }
			    },
			    
			    //CONCAT
			    concat: {
			        options: {
			            separator: ';'
			        },
			        // dist configuration is provided by useminPrepare
			        dist: {}
			    },
			     
			    //UGLIFY
			    uglify: {
			        // dist configuration is provided by useminPrepare
			        dist: {}
			    },

			    //CSSMIN
			    cssmin: {
			        dist: {}
			    },

			    //FILEREV
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
			                    'dist/css/*.css',
			                ]
			            }]
			        }
			    },


			    // USEMIN
			    // Replaces all assets with their revved version in html and css files.
			    // options.assetDirs contains the directories for finding the assets
			    // according to their relative paths
			    usemin: {
			        html: ['dist/*.html'],
			        css: ['dist/css/*.css'],
			      
			        options: {
			            assetsDirs: ['dist', 'dist/css']
			        }
			    },


			    //WATCH
				watch: {
			        copy: {
			            files: [ 'app/**', '!app/**/*.css', '!app/**/*.js'],
			            tasks: [ 'build' ]
			        },
			        scripts: {
			            files: ['app/js/**/*.js'],
			            tasks:[ 'build']
			        },
			        styles: {
			            files: ['app/css/**/*.css'],
			            tasks:['build']
			        },
			        livereload: {
			            options: {
			                livereload: '<%= connect.options.livereload %>'
			            },
			            files: [
			                'app/{,*/}*.html',
			                '.tmp/css/{,*/}*.css',
			                'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
			            ]
			      }
			    },

			    //CONNECT
			    connect: {
			      options: {
			        port: 9000,
			        // Change this to '0.0.0.0' to access the server from outside.
			        hostname: 'localhost',
			        livereload: 35729
			      },
			      dist: {
			        options: {
			          open: true,
			          base:{
			               path: 'dist',
			            options: {
			                index: 'index.html',
			                //maxAge: 300000
			            }
			          }
			        }
			      }
			    },


	});

  grunt.registerTask('build', [
	    'clean',
	    'jshint',
	    'useminPrepare',
	    'concat',
	    'cssmin',
	    'uglify',
	    'copy',
	    'filerev',
	    'usemin'
  ]);
grunt.registerTask('serve',['build','connect:dist','watch']);
grunt.registerTask('default',['build']);

};

