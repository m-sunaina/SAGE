import axios from "axios";

const API = "http://localhost:5000/users";

export const registerUser = async (user) => {
  return await axios.post(`${API}/register`, user);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API}/login`, credentials);
};
