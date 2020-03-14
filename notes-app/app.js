//const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

console.log(getNotes());
//console.log(validator.isEmail('jeff.slavin@outlook.com'));
//console.log(validator.isURL('https://hangman.slavsites.com'));

const chalkError = chalk.bold.red;

console.log(chalk.green.bold.inverse('Success!'));
console.log(chalkError('This is my error message!'));