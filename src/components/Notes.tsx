import { Note } from '../types';

interface NotesProps {
    notes: Note[];
    handleDeleteNote: (index: number) => void;
}

function Notes({ notes, handleDeleteNote}: NotesProps) {
  return (
    <>
    <ul>
      {notes.map((note : Note , index : number) => (
        <li key={index}>
          <p><b>{note.name}</b></p>
          <p>{note.description}</p>
          <p><b>Priority:</b> {note.priority} |
          <b> Status:</b> {note.status}</p>
          <button onClick={() => handleDeleteNote(index)}>Delete</button>
          <hr/>
          <br/>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Notes;