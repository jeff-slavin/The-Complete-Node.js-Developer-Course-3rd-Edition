const validator = require('validator');
const getNotes = require('./notes.js');

console.log(getNotes());
console.log(validator.isEmail('jeff.slavin@outlook.com'));
console.log(validator.isURL('https://hangman.slavsites.com'));