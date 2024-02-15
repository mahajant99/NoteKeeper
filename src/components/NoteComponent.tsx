import { useState } from 'react';
import { Note, TaskPriority } from '../types';

interface NoteProps {
  addNote: (note: Note) => void;
}


function NoteComponent({addNote}: NoteProps){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.Low);


  const handleEmptyInput = () => {
    setTitle("");
    setDescription("");
  }

  const handleButtonClick = () => {
    addNote({title, description});
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
    <select value={priority} onChange={e => setPriority(e.target.value as TaskPriority)}>
      {Object.values(TaskPriority).map(priority => (
      <option key={priority} value={priority}>{priority}</option>
      ))}
    </select>
    <button onClick={handleButtonClick}>Add Note</button>
    </>
  )
}

export default NoteComponent;
