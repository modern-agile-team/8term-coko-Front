import Quiz from '../types/Quiz';
import api from './axios/instance';

const quizzesApis = {
  getquizzes: async (params?: {
    sectionId?: number;
    partId: number;
  }): Promise<Quiz[]> => {
    const response = await api.get('/quizzes', { params });
    return response.data;
  },
};
export default quizzesApis;
