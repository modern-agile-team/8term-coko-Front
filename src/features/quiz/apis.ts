import api from '@/axios/instance';
import { Part } from '@/features/learn/types';
import type { Quiz } from '@features/quiz/types';

export const quizzesApis = {
  getQuizzes: async (params?: {
    sectionId?: number;
    partId: number;
  }): Promise<Quiz[]> => {
    const response = await api.get('/quizzes', { params });
    return response.data;
  },
};

export const partApis = {
  getPart: async (params: {
    partId: number;
  }): Promise<Omit<Part, 'status'>> => {
    const response = await api.get(`/parts/${params.partId}`);
    return response.data;
  },
};
