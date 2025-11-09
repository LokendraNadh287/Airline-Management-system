import axios from 'axios';

const API_URL = '/api/staff';

export const getStaffMembers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching staff members');
    }
};

export const addStaffMember = async (staffData) => {
    try {
        const response = await axios.post(API_URL, staffData);
        return response.data;
    } catch (error) {
        throw new Error('Error adding staff member');
    }
};

export const updateStaffMember = async (staffId, staffData) => {
    try {
        const response = await axios.put(`${API_URL}/${staffId}`, staffData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating staff member');
    }
};

export const deleteStaffMember = async (staffId) => {
    try {
        await axios.delete(`${API_URL}/${staffId}`);
    } catch (error) {
        throw new Error('Error deleting staff member');
    }
};