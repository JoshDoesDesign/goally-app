
module.exports = function(grunt) {
  //Initializing the configuration object
    grunt.initConfig({
    	// Tell Grunt to initialize configuration file
    	pkg: grunt.file.readJSON('package.json'),

    	less: {
    		development: {
    			options: {
    				paths: ["public/less/"]
    			},
    			files: { 
    				"public/css/style.css" : "public/less/style.less"
    			}
    		}
    	},

	 /* uncss: {
    		dist: {
    			files: {
    				'css/style.css': ['index.html']
    			}
    		}
    	}, */

    	watch: {
/*    		sass: {
    			files: ['sass/*.scss'],
    			tasks: ['sass', 'cssmin'],
    		}*/
    		less: {
     			files: ['public/less/*.less'],
    			tasks: ['less', 'cssmin'],   			
    		} 
    	},

/*    	sass: {
    		dist: {
    			files: {
    				'css/style.css' : 'sass/sassStyle.scss'
    			}
    		}
    	},*/

    	uglify: {
    		options: {
    			manage: false,
    		},
    		my_target: {
    			files: [{
    				'public/js/main.min.js': ['public/js/script.js', 'public/js/scriptTwo.js']
    			}]
    		}
    	}, 

    	cssmin: {
    		my_target: {
    			/*combine: {
    				files: {
    					'css/style.css': ['css/style2.css', 'css/style3.css']
    				}
    			}*/
    			files: [{
    				expand: true,
    				cwd: 'public/css/', // Minify everything inside this folder
    				src: ['*.css', '!*.min.css'], // Match the path
    				dest: 'public/css/', 
    				ext: '.min.css'
    			}]
    		}
    	}
    });	

    // Load the specific grunt package

    /* grunt.loadNpmTasks('grunt-uncss'); */
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ["watch", "less", "cssmin"]);
};

