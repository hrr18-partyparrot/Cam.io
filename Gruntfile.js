module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: 'src/server/server.js'
      }
    },


    shell: {
      prodServer: {
        command: 'git push heroku master'
      }
    },
  });


  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');



  grunt.registerTask('default', ['nodemon:dev']);

    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);


  grunt.registerTask('upload', function(n) {
    if(grunt.option('prod')) {
      // add your production server task here
      grunt.task.run(['shell:prodServer'])
    } else {
      grunt.task.run([ 'default' ]);
    }
  });

  grunt.registerTask('deploy', [
    'upload'
  ]);


};
