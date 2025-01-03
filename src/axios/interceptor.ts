import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { HTTP_STATUS } from './statusCode';
import authApis from '@features/auth/apis';

// 요청 인터셉터
export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
  return config;
};

// 응답 인터셉터
export const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  console.log(response);
  return response;
};

// 응답 에러 인터셉터
export const responseErrorInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config as InternalAxiosRequestConfig & {
    _retry?: boolean;
  };

  // 무한 루프 방지: auth/new-accessToken 요청에서는 추가 처리 금지
  if (originalRequest.url?.includes('/auth/new-accessToken')) {
    return Promise.reject(error); // 그대로 에러 전달
  }

  // 401 Unauthorized 처리
  if (
    error.response?.status === HTTP_STATUS.UNAUTHORIZED &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true; // 무한 루프 방지 플래그

    try {
      // 새 Access Token 요청
      await authApis.newAccessToken();
      // 실패했던 요청 에러 반환
      return Promise.reject(error);
    } catch (refreshError) {
      // 새 Access Token 요청 실패 시 에러 그대로 전달
      return Promise.reject(refreshError);
    }
  }

  // 다른 에러는 그대로 전달
  return Promise.reject(error);
};
