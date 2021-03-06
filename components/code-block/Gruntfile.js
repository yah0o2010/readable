module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.initConfig({

    stylus: {
      dist: {
        options: {
          compress: false
        },
        files: {
          'code-block.css': 'lib/code-block/index.styl'
        }
      }
    },

    watch: {
      stylus: {
        files: [
          'lib/**/*.styl'
        ],
        tasks: ['stylus']
      }
    }

  });

  grunt.registerTask('default', ['stylus']);
};
