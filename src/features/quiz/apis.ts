import api from '@/axios/instance';
import type { User } from '@/features/user/types';
import type { Quiz } from '@features/quiz/types';

export const quizzesApis = {
  get: async (params?: {
    sectionId?: number;
    partId: number;
  }): Promise<Quiz[]> => {
    const response = await api.get('/quizzes', { params });
    return response.data;
  },
};

export const partProgressApis = {
  put: async (params: { userId: User['id'] }): Promise<void> => {
    await api.put(`/users/${params.userId}/part-progress`);
  },
};
