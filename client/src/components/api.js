// src/api.js
import axios from "axios";

// Create an Axios instance to handle the base URL and common settings
const api = axios.create({
  baseURL: "http://localhost:5000/api/auth", // Replace with your API's base URL
});

export default api;
