import axios from 'axios';
const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});
export default axiosConfig;
