import { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

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
export const responseErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};
