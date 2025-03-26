import api from './instance';
import authApis from '@features/auth/apis';
import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;

const refreshAccessToken = async () => {
  if (!isRefreshing) {
    isRefreshing = true;
    refreshPromise = authApis
      .newAccessToken()
      .catch(error => {
        throw error;
      })
      .finally(() => {
        isRefreshing = false;
        refreshPromise = null;
      });
  }
  return refreshPromise;
};

// 요청 인터셉터
export const requestInterceptor = (config: InternalAxiosRequestConfig) =>
  config;

// 응답 인터셉터
export const responseInterceptor = (response: AxiosResponse) => response;

// 응답 에러 인터셉터
export const responseErrorInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && originalRequest) {
    try {
      await refreshAccessToken();
      return api(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};
