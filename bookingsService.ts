import axios from 'axios';

// Define Booking interface locally until proper type structure is created
interface Booking {
  id?: string;
  flightNumber: string;
  passengerName: string;
  passengerEmail: string;
  seatNumber: string;
  bookingDate: string;
  status: string;
}

const API_URL = '/api/bookings';

export const getBookings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching bookings: ' + error.message);
  }
};

export const createBooking = async (bookingData: Booking) => {
  try {
    const response = await axios.post(API_URL, bookingData);
    return response.data;
  } catch (error: any) {
    throw new Error('Error creating booking: ' + error.message);
  }
};

export const updateBooking = async (bookingId: string, bookingData: Booking) => {
  try {
    const response = await axios.put(`${API_URL}/${bookingId}`, bookingData);
    return response.data;
  } catch (error: any) {
    throw new Error('Error updating booking: ' + error.message);
  }
};

export const deleteBooking = async (bookingId: string) => {
  try {
    await axios.delete(`${API_URL}/${bookingId}`);
  } catch (error: any) {
    throw new Error('Error deleting booking: ' + error.message);
  }
};
