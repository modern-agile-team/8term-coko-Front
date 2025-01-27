import api from '@/axios/instance';
import type { User, ExperiencedUser } from '@features/user/types';
import type { PartStatus } from '@features/learn/types';
import type { Quiz } from '@features/quiz/types';

const usersApis = {
  putQuizzesProgress: ({
    quizId,
    body,
  }: {
    quizId: number;
    body: Record<'isCorrect', boolean>;
  }) => api.put<Promise<void>>(`/users/me/progress/quizzes/${quizId}`, body),

  getExperience: async (): Promise<ExperiencedUser> => {
    const response = await api.get(`/users/me/experience`);
    return response.data;
  },

  patchExperience: async (params: { experience: number }): Promise<void> => {
    const { experience } = params;
    await api.patch(`/users/me/experience`, { experience });
  },
  getQuizzes: async (params: { partId: Quiz['partId'] }): Promise<Quiz[]> => {
    const { partId } = params;
    const response = await api.get(`/users/me/quizzes/incorrect`, {
      params: { partId },
    });
    return response.data;
  },
  patchPoint: async (params: { point: number }): Promise<void> => {
    const { point } = params;
    await api.patch(`/users/me/point`, { point });
  },
  partProgress: async (params: {
    partId: Quiz['partId'];
    partStatus: PartStatus;
  }) => {
    const { partId, partStatus } = params;
    await api.put(`/users/me/part-progress/parts/${partId}`, {
      status: partStatus,
    });
  },
};

export default usersApis;
