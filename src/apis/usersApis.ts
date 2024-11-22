import Quiz from '@/types/Quiz';
import Experience from '../types/Experience';
import User from '../types/User';
import api from './axios/instance';
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
  getExperience: async (id: User['id']): Promise<Experience> => {
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
    const response = await api.get(`quizzes/users/${id}/incorrect`, {
      params: { partId },
    });
    return response.data;
  },
};
export default usersApis;
