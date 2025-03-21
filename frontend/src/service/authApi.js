import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"; // Fallback in case it's not set


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Login failed");
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error("Registration failed");
  }
};
