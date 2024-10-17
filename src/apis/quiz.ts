import { useQuery } from '@tanstack/react-query';
import Quiz from '../admin/types/Quiz';
import api from './axios/instance';

const QUIZ = {
  getQuizzes: (sectionId: number, part: Quiz['part']) => {
    return useQuery({
      queryKey: ['quizzes', { sectionId, part }],
      queryFn: () => api.get(`/quizzes?sectionId=${sectionId}&part=${part}`),
      //gcTime : 캐시에 남아있는 시간 5분
      gcTime: 5 * 60 * 1000,
      //staleTime: 데이터가 썩기까지 걸리는 시간 1분
      staleTime: 1 * 60 * 1000,
    });
  },
  postQuiz: (quiz: Quiz) => api.post(`/quizzes`, quiz),
};
export default QUIZ;
