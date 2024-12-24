import axios from 'axios';
import queryString from 'query-string';
import { getCookie } from '@utils/cookies';

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

// 요청 인터셉터
api.interceptors.request.use(config => {
  // 쿠키에서 accessToken 가져오기
  const accessToken: string | undefined = getCookie('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// 응답 인터셉터
api.interceptors.response.use(
  response => {
    // HTTP 상태 코드가 200번대인 경우
    console.log(response);
    return response;
  },
  error => {
    // HTTP 상태 코드가 에러인 경우
    return Promise.reject(error);
  }
);

export default api;
