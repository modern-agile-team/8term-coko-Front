import api from '@/axios/instance';
import type { Quiz } from '@features/quiz/types';

const quizzesApis = {
  get: async (params?: {
    sectionId?: number;
    partId: number;
  }): Promise<Quiz[]> => {
    const response = await api.get('/quizzes', { params });
    return response.data;
  },
};

export default quizzesApis;
