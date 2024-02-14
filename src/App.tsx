import { useEffect, useState } from 'react';
import { Note } from './types';
import NoteComponent from './components/NoteComponent';;
import Notes from './components/Notes';
import './App.css';
import { fetchNotes } from './api/TaskServices';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect (() => {
    fetchNotes().then(setNotes);
  })

  const handleAddNote = (note: Note) => {
    setNotes([...notes, note]);
  }

  const handleDeleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Notekeeper App</h1>
      <div>
      <NoteComponent handleAddNote={handleAddNote} />              </div>
      <hr />
      <h2>Notes:</h2>
      <Notes notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default App;
