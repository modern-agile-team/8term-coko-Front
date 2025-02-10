import api from '@/axios/instance';

export const storeApis = {
  getItems: async () => {
    const response = await api.get('/items');
    return response.data;
  },
};
