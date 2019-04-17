
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const { argv } = yargs;

const command = argv._[0];

switch(command){
    case 'add': {
        const { title, body } = argv;
        const note = notes.addNote(title, body);
        if(note) {
            console.log('Note created successfully!')
            notes.logNote(note);
        }
        else console.log('Note title already exist!')
        break;
    }
    case 'list': {
        notes.getAll();
        break;
    }
    case 'read': {
        console.log('Read Note');
        const note = notes.getNote(argv.title);
        if(note)notes.logNote(note);
        else console.log('Note not found')
        break;
    }
    case 'remove': {
        const noteRemoved = notes.removeNote(argv.title);
        let message = noteRemoved ? 'Note removed successfully': 'Note not found';
        console.log(message)
        break;
    }
}