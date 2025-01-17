// services/computerService.js
export const fetchComputers = async () => {
    const API_URL = '/api/computers'; // Update if necessary
    try {
        const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch computers');
    }
    return await response.json();
    } catch (error) {
        console.error('Error fetching computers:', error);
        throw error;
    }
};
  