import axios from 'axios';
import queryString from 'query-string';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  paramsSerializer: params => {
    return queryString.stringify(params, {
      skipEmptyString: true,
      skipNull: true,
    });
  },
});
export default api;
