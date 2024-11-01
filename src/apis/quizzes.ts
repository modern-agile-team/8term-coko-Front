import { useQuery } from '@tanstack/react-query';
import api from './axios/instance';
import Quiz from '../types/Quiz';

const QuizzesApi = {
  get: (sectionId: Quiz['sectionId'], partId: Quiz['partId']) => {
    return useQuery({
      queryKey: ['quizzes', { sectionId, partId }],
      queryFn: () =>
        api
          .get(`/quizzes?sectionId=${sectionId}&partId=${partId}`)
          .then(response => response.data),
      //gcTime : 캐시에 남아있는 시간 5분
      gcTime: 5 * 60 * 1000,
      //staleTime: 데이터가 썩기까지 걸리는 시간 1분
      staleTime: 1 * 60 * 1000,
    });
  },
};
export default QuizzesApi;
