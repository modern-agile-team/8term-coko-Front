import { useQuery } from '@tanstack/react-query';
import Quiz from '../admin/types/Quiz';
import api from './axios/instance';

const QUIZ = {
  getQuizzes: (sectionId: number, part: Quiz['part']) => {
    return useQuery({
      queryKey: ['quizzes', { sectionId, part }],
      queryFn: () => api.get(`/quizzes?sectionId=${sectionId}&part=${part}`),
      gcTime: 5 * 60 * 1000, // 5분
      staleTime: 1 * 60 * 1000, // 1분
    });
  },
};
export default QUIZ;
