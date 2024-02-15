import { useState } from 'react';
import { Note, TaskPriority, TaskStatus } from '../types';
import { createNote } from '../TaskAPIService';

interface NoteProps {
  addNote: (note: Note) => void;
}

function NoteComponent({addNote}: NoteProps){
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.Low);


  const handleEmptyInput = () => {
    setName("");
    setDescription("");
  }

  const handleButtonClick = async () => {
    const newNote = await createNote({
      name: name,
      description: description,
      priority: priority,
      status: TaskStatus.Pending
    });  
    addNote(newNote);
    handleEmptyInput();
  }

  return(
    <>
    <input type="text" 
      name="name" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
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
