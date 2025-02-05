import api from '@/axios/instance';
import type {
  ExperiencedUser,
  UserProgress,
  UserHp,
  UserAttendance,
} from '@features/user/types';
import type { Section, Part, PartStatus } from '@features/learn/types';
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

  getProgress: async (params?: {
    sectionId?: Section['id'];
    partId?: Part['id'];
  }): Promise<UserProgress> => {
    const response = await api.get('/users/me/progress', { params });
    return response.data;
  },

  putPartProgress: async (params: {
    partId: Quiz['partId'];
    partStatus: PartStatus;
  }) => {
    const { partId, partStatus } = params;
    await api.put(`/users/me/part-progress/parts/${partId}`, {
      status: partStatus,
    });
  },

  getHp: async (): Promise<UserHp> => {
    const response = await api.get('users/me/hp');
    return response.data;
  },

  patchHp: async (params: Omit<UserHp, 'id'>): Promise<void> =>
    await api.patch('/users/me/hp', params),

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
};

export default usersApis;
