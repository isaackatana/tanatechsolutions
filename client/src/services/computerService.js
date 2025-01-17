// services/computerService.js
import axios from 'axios';

export const fetchComputers = async () => {
    const API_URL = '/api/computers'; // Update if necessary
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching computers:', error);
        throw new Error('Failed to fetch computers');
    }
};
