// GruntFile.js
module.exports = function(grunt){
    // initiliased the config
    grunt.initConfig({
        jshint: {
            files: ["*.js", "js/style.js"],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ["css/default.css"]
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'css/master.css': ['css/sass.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/style.min.js': ['js/style.js']
                }
            }
        },
        watch: {
            css: {
                files: ["css/default.css", "css/sass.css"],
                tasks: ["csslint", "cssmin"]
            },
            js: {
                files: ["js/style.js"],
                tasks: ["jshint", "uglify"]
            },
            sass: {
                files: ["sass/style.scss"],
                tasks: ["sass"]
            }
        },
        sass: {
            dist: {
                files: {
                    "css/sass.css":"sass/style.scss"
                }
            }
        }
    
    });
    //Run command tasks
    // running grunt jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // running grunt csslint
    grunt.loadNpmTasks('grunt-contrib-csslint');
    // run grunt mincss
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // run grunt uglifyy js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // run gruntwatch
    grunt.loadNpmTasks('grunt-contrib-watch');
    // run gruntSass
    grunt.loadNpmTasks('grunt-contrib-sass');


    // In terminal if entered 'grunt debug', 
    // it will only run the tasks inside the array 
    grunt.registerTask("default", ["jshint", "csslint"]);
    grunt.registerTask("debug", ["jshint", "csslint"]); 
    grunt.registerTask("min", ["csslint", "cssmin", "jshint", "uglify"]); 
    grunt.registerTask("compile", ["sass"]); 
    grunt.registerTask("w", ["watch"]); 
    
};