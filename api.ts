import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API call to get flight details
export const getFlights = async () => {
  try {
    const response = await api.get('/flights');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching flight details');
  }
};

// Example API call to book a ticket
export const bookTicket = async (ticketData) => {
  try {
    const response = await api.post('/bookings', ticketData);
    return response.data;
  } catch (error) {
    throw new Error('Error booking ticket');
  }
};

// Example API call to get passenger details
export const getPassengers = async () => {
  try {
    const response = await api.get('/passengers');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching passenger details');
  }
};

// Example API call to get staff schedules
export const getStaffSchedules = async () => {
  try {
    const response = await api.get('/staff/schedules');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching staff schedules');
  }
};

export default api;