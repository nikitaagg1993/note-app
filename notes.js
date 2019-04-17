const fs = require('fs');
let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        return notes;
    }catch(error){
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = { title, body };
    let duplicateNotes = notes.filter(item => item.title === title)
    if(!duplicateNotes.length) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    // return null;
};

let getAll = () => {
    const notes = fetchNotes();
    console.log(`Printing ${notes.length} notes`);
    notes.forEach((note, index)=>{
        console.log(`\nNote ${index+1}`);
        logNote(note);
    })
}

let getNote = (title) => {
    const notes = fetchNotes();
    return notes.find(note => note.title == title);
}

let removeNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;  
}

let logNote = (note) => {
    console.log('-----------------');
    console.log('Title: ', note.title);
    console.log('Body: ', note.body);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};