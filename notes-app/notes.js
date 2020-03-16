const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find( (note) => note.title.toLowerCase() === title.toLowerCase());

    if (note) {
        console.log(chalk.blue.inverse(note.title) + ': ' + chalk.blue(note.body));
    } else {
        console.log(chalk.red(`No note found with the title "${title}"`));
    };
};

const listNotes = () => {
    console.log(chalk.inverse('Your notes:'));
    loadNotes().forEach((note) => {
        console.log(note.title);
    });
};

const removeNote = (title) => {
    const notes = loadNotes();

    const keepNotes = notes.filter( (note) => note.title.toLowerCase() !== title.toLowerCase());

    // Was a note removed?
    if (keepNotes.length !== notes.length ) {
        saveNotes(keepNotes);
        // could also do chalk.green.inverse (although would be black text, below has white text)
        console.log(chalk.bgGreen(`Note with title "${title}" removed.`))
    } else {
        // could also do chalk.red.inverse (although would be black text, below has white text)
        console.log(chalk.bgRed(`No notes matching the title "${title}" to remove.`));
    };
};

const addNote = (title, body) => {
    const notes = loadNotes();

    // Does title already exist? If so, do not allow add
    // The below would look through all notes, if we had 10000 notes, even when it finds a match, it would still look through them all
    //const duplicateNotes = notes.filter( (note) => note.title.toLowerCase() === title.toLowerCase());
    // This is how to stop the process once you find a duplicate
    const duplicateNote = notes.find((note) => note.title.toLowerCase() === title.toLowerCase());

    //debugger; // pause debugger (if app.js started with "node inspect app.js......" then code will pause at start, and then here as well)

    // console.log(duplicateNote); // debugging
    // console.log(title); // debugging

    if (!duplicateNote) {   // better way using the new singular 'duplicateNote' variable above
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    };
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}