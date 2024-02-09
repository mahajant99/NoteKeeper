import { useState } from 'react';
import './App.css';

function NoteList({ notes } : {notes:any}) {
  return (
    <ul>
      {notes.map((note : any , index : any) => (
        <li key={index}>
          <p>{note.title}</p>
          <p>{note.description}</p>
        </li>
      ))}
    </ul>
  );
}

function Note({handleAddNote}: {handleAddNote: any}){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
    <button onClick={() => handleAddNote(title, description)}>Add Note</button>
    </>
  )
}

function App() {
  const [notes, setNotes] = useState<Array<{ title: any; description: any }>>([]);

  const handleAddNote = (title: any, description: any) => {
    setNotes([...notes, { title: title, description: description }]);
  };

  return (
    <div>
      <h1>Notekeeper App</h1>
      <div>
        <Note handleAddNote={handleAddNote} />        
      </div>
      <hr />
      <h2>Notes:</h2>
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
