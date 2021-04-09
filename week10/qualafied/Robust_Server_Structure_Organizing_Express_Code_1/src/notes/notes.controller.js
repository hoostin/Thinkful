const path = require("path");
const notes = require(path.resolve("src/data/notes-data"));
function idExists(request, response, next) {
  const { noteId } = request.params;
  const foundId = notes.find((note) => note.id === Number(noteId));
  if (foundId) {
    return next();
  }
  next({ status: 404, message: `Note id not found: ${noteId}` });
}
function textExists(request, response, next) {
  const { data: { text } = {} } = request.body;
  if (text) {
    return next();
  }
  next({ status: 400, message: "A text property is require!!!!!!!!!!!" });
}
function update(request, response) {
  // const noteId = Number(request.params.noteId);
  // // "from the API"
  // const foundNote = notes.find((selected) => selected.id === noteId);
  // const originalText = foundNote.text;
  // const { data } = request.body;
  // if (originalText !== data.text) {
  //   foundNote.text = data.text;
  // }
  // response.json({ data: foundNote });
  const { noteId } = request.params;
  const foundNote = notes.find((note) => note.id === Number(noteId));
  const { data: { text } = {} } = request.body;
  if (foundNote.text !== text) {
    foundNote.text = text;
  }

  response.json({ data: foundNote });
}
function deleteNote(request, response) {
  const { noteId } = request.params;
  const foundNote = notes.findIndex((note) => note.id === Number(noteId));
  notes.splice(foundNote, 1);
  response.sendStatus(204);
}
function list(request, response) {
  response.json({ data: notes });
}
function read(request, response) {
  const noteId = Number(request.params.noteId);
  const foundNote = notes.find((note) => note.id === noteId);
  response.status(200).json({ data: foundNote });
}
function create(req, res) {
  const { data: { text } = {} } = req.body;

  const newNote = {
    id: notes.length + 1, // Assign the next ID
    text,
  };
  notes.push(newNote);
  res.status(201).json({ data: newNote });
}
module.exports = {
  update: [idExists, textExists, update],
  delete: [idExists, deleteNote],
  list,
  read: [idExists, read],
  create: [textExists, create],
};
