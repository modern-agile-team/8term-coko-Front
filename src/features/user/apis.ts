import api from '@/axios/instance';
import type { User, ExperiencedUser } from '@features/user/types';
import type { PartStatus } from '@features/learn/types';
import type { Quiz } from '@features/quiz/types';

const usersApis = {
  putQuizzesProgress: ({
    userId,
    quizId,
    body,
  }: {
    userId: number;
    quizId: number;
    body: Record<'isCorrect', boolean>;
  }) =>
    api.put<Promise<void>>(`/users/${userId}/progress/quizzes/${quizId}`, body),
  getExperience: async (id: User['id']): Promise<ExperiencedUser> => {
    const response = await api.get(`/users/${id}/experience`);
    return response.data;
  },

  patchExperience: async (params: {
    id: User['id'];
    experience: number;
  }): Promise<void> => {
    const { id, experience } = params;
    await api.patch(`/users/${id}/experience`, { experience });
  },
  getQuizzes: async (params: {
    id: User['id'];
    partId: Quiz['partId'];
  }): Promise<Quiz[]> => {
    const { id, partId } = params;
    const response = await api.get(`/quizzes/users/${id}/incorrect`, {
      params: { partId },
    });
    return response.data;
  },
  patchPoint: async (params: {
    id: User['id'];
    point: number;
  }): Promise<void> => {
    const { id, point } = params;
    await api.patch(`/users/${id}/point`, { point });
  },
  partProgress: async (params: {
    userId: User['id'];
    partId: Quiz['partId'];
    partStatus: PartStatus;
  }) => {
    const { userId, partId, partStatus } = params;
    await api.put(`/users/${userId}/part-progress/parts/${partId}`, {
      status: partStatus,
    });
  },
};

export default usersApis;
