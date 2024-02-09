import { useState } from 'react';
import './App.css';

function NotesList({ notes, handleDeleteNote} : {notes:any, handleDeleteNote:any}) {
  return (
    <>
    <ul>
      {notes.map((note : any , index : any) => (
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

  const addNote = () => {
    handleAddNote({title, description});
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
    <button onClick={addNote}>Add Note</button>
    </>
  )
}

function App() {
  const [notes, setNotes] = useState<Array<{ title: any; description: any }>>([]);

  const handleAddNote = ({ title, description }: { title: any; description: any }) => {
    setNotes([...notes, { title, description }]);
  };

  const handleDeleteNote = (index: any) => {
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
      <NotesList notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default App;
