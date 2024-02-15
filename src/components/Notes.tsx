import { Note } from '../types';

interface NotesProps {
    notes: Note[];
    handleDeleteNote: (id: number) => void;
}

function Notes({ notes, handleDeleteNote}: NotesProps) {
  return (
    <>
    <ul>
      {notes.map((note : Note) => (
        <li key={note.id}>
          <p><b>{note.name}</b></p>
          <p>{note.description}</p>
          <p><b>Priority:</b> {note.priority} |
          <b> Status:</b> {note.status}</p>
          <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          <hr/>
          <br/>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Notes;