const { Utils, TestingError } = require('learnpack/plugin')

module.exports =  {
  validate: async function({ exercise, configuration }){

    /**
     *  This function will be called before the test, is ideal to validate that the client has the right packages installed
     *  for example:
     * 
        if (!shell.which('jest')) {
          const packageName = "jest@24.8.0";
          throw TestingError(`🚫 You need to have ${packageName} installed to run test the exercises, run $ npm i ${packageName} -g`);
        }
     
     * */ 

    return true
  },
  run: async ({ exercise, socket, configuration }) => {

    /**
     * This function must return the stdout to the user.
     * 
     * You can also throw a TestingError if the test was unsuccessfull.
     */

    const errors = [];
    const stdout = "Some output to the user"

    if(errors.length > 0) throw TestingError(errors.join("\n"))
    else return stdout
  }
}