import { HTTP_STATUS_MESSAGE } from '@features/error/constants';
import { DefaultError, Query } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type handleError = (
  error: DefaultError,
  query: Query<unknown, unknown, unknown>
) => void;

export const handleError: handleError = (error, query) => {
  if (query.state.data !== undefined) {
    return toast.error(`백그라운드 데이터 가져오기 실패: ${error.message}`);
  }
};

type StatusCode = keyof typeof HTTP_STATUS_MESSAGE;

export const getErrorMessage = (statusCode: number): string => {
  // 상태 코드가 객체의 키에 존재하는지 확인
  return (
    HTTP_STATUS_MESSAGE[statusCode as StatusCode] || HTTP_STATUS_MESSAGE.default
  );
};
