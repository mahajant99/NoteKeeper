import { useState } from 'react';
import './App.css';

type Note = {
  title: string;
  description: string;
}

function Notes({ notes, handleDeleteNote} : {notes: Note[], handleDeleteNote: any}) {
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

function Note({handleAddNote}: {handleAddNote: any}){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleEmptyInput = () => {
    setTitle("");
    setDescription("");
  }

  const handleButtonClick = () => {
    handleAddNote({title, description});
    handleEmptyInput();
  }

  return(
    <>
    <input type="text" 
      name="title" 
      value={title} 
      onChange={(e) => setTitle(e.target.value)} 
      placeholder="Enter title" 
    />
    <br />
    <textarea name="description" 
      value={description} 
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Enter description"
    />
    <br />
    <button onClick={handleButtonClick}>Add Note</button>
    </>
  )
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

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
        <Note handleAddNote={handleAddNote} />        
      </div>
      <hr />
      <h2>Notes:</h2>
      <Notes notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default App;
