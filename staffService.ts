import axios from 'axios';

// Define Staff interface locally
interface Staff {
  name: string;
  role: string;
  schedule: string;
  id?: string;
}

const API_URL = '/api/staff';

export const getStaffMembers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching staff members');
  }
};

export const addStaffMember = async (staffData: Staff) => {
  try {
    const response = await axios.post(API_URL, staffData);
    return response.data;
  } catch (error: any) {
    throw new Error('Error adding staff member');
  }
};

export const updateStaffMember = async (staffId: string, staffData: Staff) => {
  try {
    const response = await axios.put(`${API_URL}/${staffId}`, staffData);
    return response.data;
  } catch (error: any) {
    throw new Error('Error updating staff member');
  }
};

export const deleteStaffMember = async (staffId: string) => {
  try {
    await axios.delete(`${API_URL}/${staffId}`);
  } catch (error: any) {
    throw new Error('Error deleting staff member');
  }
};
