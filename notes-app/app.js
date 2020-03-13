const fs = require('fs');

//fs.writeFileSync('notes.txt', 'My name is Jeff Slavin.');

// Challenge Area
fs.appendFileSync('notes.txt', '\nThis is another line');