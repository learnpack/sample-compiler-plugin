const fs = require('fs')
const { Utils, CompilationError } = require('learnpack/plugin')

module.exports = {
  validate: () => {

    // return true or false if the compilation should take place
    // you can leave this empty if you don't know what to validate.

    return true
  },

  /**
  The run function receives one object with the following properties: exercise, socket and configuration.

  exercise: contains all the data about the exercise being compiled right now
    - entry: (string) Path to the file that should be considered as entry
    - files: (array) List of files inside the exercise
  
  socket: Represents a bidirectional connection with learnpack and the user, you can use the socket to ask questions, ask for confirmation, open windows, etc.
    - openWindow: (function) A function that receives a URL to open
  
  configuration: The configuration object contains all information you need to know about all the exercies
    - outputPath: (string) 
    - publicUrl: (string) 

 */
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
  