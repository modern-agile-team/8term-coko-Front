import { useQuery } from '@tanstack/react-query';
import api from './axios/instance';
import Quiz from '../types/Quiz';

const QUIZ = {
  getQuizzes: (sectionId: Quiz['sectionId'], part: Quiz['part']) => {
    return useQuery({
      queryKey: ['quizzes', { sectionId, part }],
      queryFn: () => api.get(`/quizzes?sectionId=${sectionId}&part=${part}`),
      //gcTime : 캐시에 남아있는 시간 5분
      gcTime: 5 * 60 * 1000,
      //staleTime: 데이터가 썩기까지 걸리는 시간 1분
      staleTime: 1 * 60 * 1000,
    });
  },
};
export default QUIZ;
