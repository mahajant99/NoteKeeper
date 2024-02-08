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

function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState<{ title: any; description: any }[]>([]);

  const handleInputChange = (e : any) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  const handleAddNote = () => {
      setNotes([...notes, { title, description }]);
      setTitle('');
      setDescription('');
  };

  return (
    <div>
      <h1>Notekeeper App</h1>
      <div>
        <input type="text" name="title" value={title} onChange={handleInputChange} placeholder="Enter title" />
        <br />
        <textarea name="description" value={description} onChange={handleInputChange} placeholder="Enter description" />
        <br />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <hr />
      <h2>Notes:</h2>
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
