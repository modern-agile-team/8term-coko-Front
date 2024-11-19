import Experience from '../types/Experience';
import User from '../types/User';
import api from './axios/instance';
const experienceAPis = {
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
};
export default experienceAPis;
