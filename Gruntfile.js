module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    sass: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        build: {
          src: 'src/<%= pkg.name %>.scss',
          dest: 'dist/<%= pkg.name %>.min.css'
        }
    },
    watch: {
      sass: {
        files: ['src/*.scss'],
        tasks: ['sass']
      },
      uglify: {
        files: ['src/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'watch']);

};
