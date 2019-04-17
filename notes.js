console.log('Starting note.js');

let addNote = (title, body) => {
    console.log('title:', title, 'body:', body)
};

let getAll = () => {
    console.log('getAll')
}

let getNote = (title) => {
    console.log('get Note', title)
}

let removeNote = (title) => {
    console.log('Remove Note', title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};