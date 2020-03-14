//const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {
    console.log('Removing note!');
};

// console.log(getNotes());
// console.log(validator.isEmail('jeff.slavin@outlook.com'));
// console.log(validator.isURL('https://hangman.slavsites.com'));

// const chalkError = chalk.bold.yellow;

// console.log(chalk.blue.bold.inverse('Success!'));
// console.log(chalkError('This is my error message!'));

// console.log(process.argv[2]);