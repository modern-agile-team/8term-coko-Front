import api from '@/axios/instance';
import type { User } from '@features/user/types';

const authApis = {
  verifyAuth: async (): Promise<User> => {
    const response = await api.get('/auth/verify');
    return response.data;
  },
};

export default authApis;
