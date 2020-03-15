const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes again... A Git Change';

const removeNote = (title) => {
    const notes = loadNotes();

    const keepNotes = notes.filter( (note) => {
        return note.title.toLowerCase() !== title.toLowerCase();
    });

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
    const duplicateNotes = notes.filter( (note) => {
        return note.title.toLowerCase() === title.toLowerCase();
    });

    if (duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}