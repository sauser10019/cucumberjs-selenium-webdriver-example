'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({

    env: {
      chrome: {
        PLATFORM: 'CHROME'
      },
      firefox: {
        PLATFORM: 'FIREFOX'
      },
      android: {
        PLATFORM: 'ANDROID'
      },
      phantom: {
        PLATFORM: 'PHANTOM'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'features/step_definitions/*.js', 'features/support/*.js'],
      options: {
        node: true,
        strict: true,
        globalstrict: true
      }
    },

    exec: {
      cukes: {
        command: 'node ' + path.join('node_modules', 'cucumber',  'bin', 'cucumber.js -t @cuke')
      },
      mocha: {
        command: 'node ' + path.join('node_modules', 'mocha',  'bin', 'mocha ./tests/*.js')
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('default', ['env:phantom', 'jshint', 'exec:cukes']);
  
  grunt.registerTask('phantom', ['env:phantom', 'jshint', 'exec:cukes']);
  grunt.registerTask('chrome', ['env:chrome', 'jshint', 'exec:cukes']);
  grunt.registerTask('firefox', ['env:firefox', 'jshint', 'exec:cukes']);

  grunt.registerTask('mocha', ['jshint', 'exec:mocha']);

};
