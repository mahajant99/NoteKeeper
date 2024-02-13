import { useState } from 'react';
import { Note } from '../types';

interface NoteProps {
    handleAddNote: (note: Note) => void;
}


function NoteComponent({handleAddNote}: NoteProps){
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

export default NoteComponent;
