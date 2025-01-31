import CosmeticItem from '@/types/CosmeticItem ';
import api from '@apis/axios/instance';

const cosmeticItemApis = {
  getCosmeticItem: async (): Promise<CosmeticItem[]> => {
    const response = await api.get('/items');
    return response.data;
  },
};
export default cosmeticItemApis;
