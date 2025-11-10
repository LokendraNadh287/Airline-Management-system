import axios from 'axios';

// Define Flight interface locally until proper type structure is created
interface Flight {
  flightNumber: string;
  route: string;
  schedule: string;
  status: string;
  id?: string;
}

const API_URL = '/api/flights';

export const getFlights = async (): Promise<Flight[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addFlight = async (flight: Flight): Promise<Flight> => {
  const response = await axios.post(API_URL, flight);
  return response.data;
};

export const updateFlight = async (flightId: string, flight: Flight): Promise<Flight> => {
  const response = await axios.put(`${API_URL}/${flightId}`, flight);
  return response.data;
};

export const deleteFlight = async (flightId: string): Promise<void> => {
  await axios.delete(`${API_URL}/${flightId}`);
};
