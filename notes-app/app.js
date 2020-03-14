//const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

console.log(getNotes());
//console.log(validator.isEmail('jeff.slavin@outlook.com'));
//console.log(validator.isURL('https://hangman.slavsites.com'));

const chalkError = chalk.bold.yellow;

console.log(chalk.blue.bold.inverse('Success!'));
console.log(chalkError('This is my error message!'));