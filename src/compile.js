const fs = require('fs')
const { Utils, CompilationError } = require('learnpack/plugin')

/**
 
 exercise: {
  entry: (string) Path to the file that should be considered as entry
  files: (array) List of files inside the exercise
 }
 
 socket: {
  entry: (string) Path to the file that should be considered as entry
  files: (array) List of files inside the exercise
 }
 

 The configuration object contains all information you need to know about all the exercies
 configuration: {
  outputPath: (string) 
  publicUrl: (string) 
 }

 */
module.exports = {
  validate: () => {

    // return true or false if the compilation should take place
    // you can leave this empty if you don't know what to validate.

    return true
  },
  run: async function ({ exercise, socket, configuration }) {

    // here you should include your compulation code, the files to compile will be inside exercise.files

    const errors = []
    if(foundErrors.length > 0) throw CompilationError(foundErrors.map(e => e.message).join(""))
    
    // if you need to open the compiler website on a new window
    socket.openWindow(`${configuration.publicUrl}/preview`)

    // return string with the console output (stdout)
    return Utils.cleanStdout("Successfully built your HTML")
  },
}
  