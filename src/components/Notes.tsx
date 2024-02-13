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
          <p><b>{note.title}</b></p>
          <p>{note.description}</p>
          <button onClick={() => handleDeleteNote(index)}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default Notes;