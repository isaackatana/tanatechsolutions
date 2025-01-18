import axios from "axios";

const API_URL = "http://localhost:5000/api/computers"; // Update with your backend URL

export const fetchComputers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchComputerById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createComputer = async (computerData) => {
  const response = await axios.post(API_URL, computerData);
  return response.data;
};

export const updateComputer = async (id, computerData) => {
  const response = await axios.put(`${API_URL}/${id}`, computerData);
  return response.data;
};

export const deleteComputer = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
