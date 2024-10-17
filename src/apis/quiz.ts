import { useQuery } from '@tanstack/react-query';
import Quiz from '../types/Quiz';
import api from './axios/instance';

const QUIZ = {
  getQuizzes: (sectionId: string | null, part: string | null) => {
    return useQuery<Quiz[]>({
      queryKey: ['quizzes', { sectionId, part }],
      queryFn: () =>
        api
          .get(`/quizzes?sectionId=${sectionId}&part=${part}`)
          .then(response => response.data),
      gcTime: 5 * 60 * 1000, // 5분
      staleTime: 1 * 60 * 1000, // 1분
    });
  },
};
export default QUIZ;
