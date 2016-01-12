module.exports = function(grunt) {
    
    grunt.initConfig({
        watch: {
            style: {
                files: 'style.scss',
                tasks: ['style']
            }
        },
        sass: {
            options: {
                sourcemap: 'none'
            },
            files: {
                src: 'style.scss',
                dest: 'style.css'
            }
        },
        autoprefixer: {
            files: {
                src: 'style.css',
                dest: 'style.css'
            }
        },
        cssmin: {
            files: {
                src: 'style.css',
                dest: 'style.min.css'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('style', ['sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('dist', 'style');
    
    grunt.registerTask('default', ['dist', 'watch']);
    
};
