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
  if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
    try {
      // 401 발생 시 새 Access Token 요청 (백엔드에서 refreshToken 검증)
      await authApis.newAccessToken();
    } catch (refreshError) {
      // 새 Access Token 요청 실패 시 에러 그대로 전달
      return Promise.reject(refreshError);
    }
  }

  // 다른 에러는 그대로 전달
  return Promise.reject(error);
};
