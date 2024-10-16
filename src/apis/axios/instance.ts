import axios from 'axios';
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});
export default api;
