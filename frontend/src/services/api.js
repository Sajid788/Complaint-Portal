import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all complaints
export const getComplaints = async () => {
  try {
    const response = await api.get('/complaints');
    return response.data;
  } catch (error) {
    console.error('Error fetching complaints:', error);
    throw error;
  }
};

// Get single complaint
export const getComplaint = async (id) => {
  try {
    const response = await api.get(`/complaints/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching complaint ${id}:`, error);
    throw error;
  }
};

// Create complaint
export const createComplaint = async (complaintData) => {
  try {
    const response = await api.post('/complaints', complaintData);
    return response.data;
  } catch (error) {
    console.error('Error creating complaint:', error);
    throw error;
  }
};

// Update complaint
export const updateComplaint = async (id, complaintData) => {
  try {
    const response = await api.put(`/complaints/${id}`, complaintData);
    return response.data;
  } catch (error) {
    console.error(`Error updating complaint ${id}:`, error);
    throw error;
  }
};

// Delete complaint
export const deleteComplaint = async (id) => {
  try {
    const response = await api.delete(`/complaints/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting complaint ${id}:`, error);
    throw error;
  }
}; 