import { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

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

export const responseErrorInterceptor = (error: any) => {
  return Promise.reject(error);
};
