const { plugin } = require("learnpack/plugin")

/**
 * This is the beginning of your project, there are three things to define here:
 * 
 * language:    Its important to specify what language is your package going to be compiling; 
 *              Some of the possible languages are html, css, react, java, node and python.
 * compile:     object that contains two properties functions: run and validate.
 * test:        object that contains two properties functions: run and validate.
 */
module.exports = plugin({
    language: "html",
    compile: require('./compile'),
    test: require('./test'),
})