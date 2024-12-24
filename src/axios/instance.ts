import axios from 'axios';
import {
  requestInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
} from './interceptor';
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
  withCredentials: true,
});

// 요청 인터셉터
api.interceptors.request.use(requestInterceptor);

// 응답 인터셉터
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export default api;
