console.log('Starting app.js');
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const { argv } = yargs;

console.log('args', argv,);
const command = argv._[0];

switch(command){
    case 'add': {
        const { title, body } = argv;
        notes.addNote(title, body);
        break;
    }
    case 'list': {
        console.log('List Note');
        notes.getAll();
        break;
    }
    case 'read': {
        console.log('Read Note');
        const { title } = argv;
        notes.getNote(title);
        break;
    }
    case 'remove': {
        console.log('Remove Note');
        const { title } = argv;
        notes.removeNote(title);
        break;
    }
}