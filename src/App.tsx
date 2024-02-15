import { useEffect, useState } from 'react';
import { Note } from './types';
import { deleteNote, fetchNotes } from './TaskAPIService';

import NoteComponent from './components/NoteComponent';;
import Notes from './components/Notes';

import './App.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect (() => {
    fetchNotes().then(setNotes);
  })

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  }

  const handleDeleteNote = async (id: number) => {
    await deleteNote(id);
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <div>
      <h1>Notekeeper App</h1>
      <div>
        <NoteComponent addNote={addNote} />
      </div>
      <hr/>
      <h2>Notes:</h2>
      <Notes notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default App;
