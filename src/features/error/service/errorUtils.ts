import { DefaultError, Query } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type OnError = (
  error: DefaultError,
  query: Query<unknown, unknown, unknown>
) => void;
export const onError: OnError = (error, query) => {
  if (query.state.data !== undefined) {
    toast.error(`백그라운드 데이터 가져오기 실패: ${error.message}`);
  }
};
