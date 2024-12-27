import api from '@/axios/instance';
import type { User } from '@features/user/types';

const authApis = {
  verify: async (): Promise<User> => {
    const response = await api.get('/auth/verify');
    return response.data;
  },
  logout: async (): Promise<void> => {
    await api.post('/auth/logout');
  },
};

export default authApis;
