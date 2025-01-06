import { QueryKey, ThrowOnError } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const throwOnError: ThrowOnError<
  unknown,
  Error,
  unknown,
  QueryKey
> = error => {
  const axiosError = error as AxiosError;
  console.log(axiosError);
  if (axiosError.response?.status && axiosError.response.status >= 500) {
    return true;
  }
  return false;
};
