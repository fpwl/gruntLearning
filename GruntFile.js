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
        }


    });
    //Run command tasks
    // running grunt jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // running grunt csslint
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask("default", ["jshint", "csslint"]);

    // In terminal if entered 'grunt debug', 
    // it will only run the tasks inside the array 
    grunt.registerTask("debug", ["jshint", "csslint"]); 
};