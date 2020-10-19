const fs = require('fs');

const path = require('path')




// post a note
function postNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    return note;
}

// valid a note
function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

// filters JSON 
function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
}

// delete a JSON object
function deleteByID(id, notes) {
    const toBeDeleted = notes.filter(note => note.id === id)[0];
    const indexResult = notes.indexOf(toBeDeleted);
    notes.splice(indexResult, 1);
    fs.writeFileSync(
        path.join(__dirname,'../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    )
    return notes;
}


// export notesRoutes.js
module.exports = {
    postNote,
    validateNote,
    findById,
    deleteByID
  };