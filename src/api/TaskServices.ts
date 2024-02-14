import axios from 'axios';
import { Note } from '../types';

const API_URL = "http://localhost:8080/tasks";

export const fetchNotes = async () => {
    const response = await axios.get<Note[]>(API_URL);
    return response.data;
};
