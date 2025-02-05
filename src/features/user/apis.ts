import api from '@/axios/instance';
import type {
  ExperiencedUser,
  UserProgress,
  UserHp,
  PersonalRanking,
} from '@features/user/types';
import type { Section, Part, PartStatus } from '@features/learn/types';
import type { Quiz } from '@features/quiz/types';
import type { RankingSort } from '@features/ranking/types';

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

  getProgress: async (params?: {
    sectionId?: Section['id'];
    partId?: Part['id'];
  }): Promise<UserProgress> => {
    const response = await api.get('/users/me/progress', { params });
    return response.data;
  },

  patchPartStatus: async (params: {
    partId: Quiz['partId'];
    partStatus: PartStatus;
  }) => {
    const { partId, partStatus } = params;
    await api.patch(`/users/me/parts/${partId}/status`, {
      status: partStatus,
    });
  },
  patchCompletedPartStatus: async (params: { partId: Quiz['partId'] }) => {
    await api.patch(`/users/me/parts/${params.partId}/status/completed`);
  },

  getHp: async (): Promise<UserHp> => {
    const response = await api.get('users/me/hp');
    return response.data;
  },

  patchHp: async (params: Omit<UserHp, 'id'>): Promise<void> =>
    await api.patch('/users/me/hp', params),

  getRanking: async (params: {
    sort: RankingSort;
  }): Promise<PersonalRanking> => {
    const response = await api.get('users/me/rankings', { params });
    return response.data;
  },
};

export default usersApis;
