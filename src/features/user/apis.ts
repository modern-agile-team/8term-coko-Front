import api from '@/axios/instance';
import type {
  ExperiencedUser,
  UserProgress,
  UserHp,
  PersonalRanking,
  UserAttendance,
  Opinions,
} from '@features/user/types';
import type { Section, Part, PartStatus } from '@features/learn/types';
import type { Quiz } from '@features/quiz/types';
import type { RankingSort } from '@features/ranking/types';
import { CosmeticItem, CosmeticItemOption } from '@/features/store/types';
import type { DailyQuestResponse } from '@features/quest/types';

export const usersApis = {
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

  getRanking: async (params: {
    sort: RankingSort;
  }): Promise<PersonalRanking> => {
    const response = await api.get('users/me/rankings', { params });
    return response.data;
  },

  getAttendanceList: async (params: {
    year: number;
    month: number;
  }): Promise<UserAttendance[]> => {
    const response = await api.get('/users/me/attendance', { params });
    return response.data;
  },

  getAttendance: async (): Promise<boolean> => {
    const response = await api.get('/users/me/attendance/today');
    return response.data;
  },

  postAttendance: async () => await api.post('/users/me/attendance'),

  getDailyQuest: async (): Promise<DailyQuestResponse[]> => {
    const response = await api.get('/users/me/quests/daily');
    return response.data;
  },
};

export const userItemsApi = {
  getItems: async (
    params?: CosmeticItemOption['query'] & {
      page: number;
      limit: number;
    }
  ): Promise<{
    totalCount: number;
    totalPage: number;
    currentPage: number;
    contents: CosmeticItem[];
  }> => {
    const response = await api.get('/users/me/items', { params });
    console.log(response);
    return response.data;
  },
  putResetEquippedItems: async (): Promise<void> =>
    await api.put('/users/me/items/reset-equipment'),
  postPurchaseItem: async (params: { itemIds: number[] }): Promise<void> =>
    await api.post('/users/me/items', params),
  patchEquippedItems: async (params: {
    itemIds: number[];
    isEquipped: boolean;
  }): Promise<void> => {
    return await api.patch('/users/me/items', params);
  },
};

export const userHpApi = {
  getHp: async (): Promise<UserHp> => {
    const response = await api.get('users/me/hp');
    return response.data;
  },

  patchHp: async (): Promise<UserHp> => {
    const response = await api.patch('/users/me/hp');
    return response.data;
  },
};

export const userOpinionsApi = {
  postOpinions: async (parmas: Opinions): Promise<void> =>
    await api.post('/users/me/opinions', parmas),
};
