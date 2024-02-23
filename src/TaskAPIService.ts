import axios from 'axios';
import { Note } from './types';

const API_URL = "https://todoapplication-d88v.onrender.com/tasks";

export const fetchNotes = async () => {
    const response = await axios.get<Note[]>(API_URL);
    return response.data;
};

export const createNote = async (note: Omit<Note, 'id'>) => {
    const response = await axios.post<Note>(API_URL, note);
    return response.data;
};

export const deleteNote = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
