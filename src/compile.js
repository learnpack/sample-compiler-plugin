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
  validate: () => true,
  run: async function ({ exercise, socket, configuration }) {

    let entryPath = exercise.entry || exercise.files.map(f => './'+f.path).find(f => f.indexOf('index.html') > -1)
    if(!entryPath) throw CompilationError("Missing index.html entry file");

    let errors = exercise.files.filter(f => f.path.includes(".html") || f.path.includes(".css")).map((file)=>{
      const prettyConfig = {
          parser: file.name.split('.').pop(),
          printWidth: 150,             // Specify the length of line that the printer will wrap on.
          tabWidth: 4,                // Specify the number of spaces per indentation-level.
          useTabs: true,              // Indent lines with tabs instead of spaces.
          bracketSpacing: true,
          semi: true,                 // Print semicolons at the ends of statements.
          encoding: 'utf-8'           // Which encoding scheme to use on files
      };
      const content = fs.readFileSync(file.path, "utf8")
      try{
        const formatted = prettier.format(content, prettyConfig)
        fs.writeFileSync(file.path, formatted)
        fs.writeFileSync(`${configuration.outputPath}/${file.name}`, formatted)
      }
      catch(error){
        return error;
      }
      return null;
    });

    const foundErrors = [].concat(errors.filter(e => e !== null))
    if(foundErrors.length > 0) throw CompilationError(foundErrors.map(e => e.message).join(""))
    
    socket.openWindow(`${configuration.publicUrl}/preview`)

    return Utils.cleanStdout("Successfully built your HTML")
  },
}
  