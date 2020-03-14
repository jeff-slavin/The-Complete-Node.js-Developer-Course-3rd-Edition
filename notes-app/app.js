//const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const getNotes = require('./notes.js');


//const command = process.argv[2];
//console.log(process.argv);

// Customize Yargs Version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note');
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
});

// Listing out the notes
yargs.command({
    command: 'list',
    describe: 'Listing out the notes',
    handler: function () {
        console.log('Listing out the notes');
    }
});

// Reading a note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading a note');
    }
});





console.log(yargs.argv);

// if (command === 'add') {
//     console.log('Adding note!');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// };

// console.log(getNotes());
// console.log(validator.isEmail('jeff.slavin@outlook.com'));
// console.log(validator.isURL('https://hangman.slavsites.com'));

// const chalkError = chalk.bold.yellow;

// console.log(chalk.blue.bold.inverse('Success!'));
// console.log(chalkError('This is my error message!'));

// console.log(process.argv[2]);