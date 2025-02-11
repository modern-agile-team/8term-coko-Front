import api from '@/axios/instance';
import { CosmeticItem } from '@/features/store/types';

export const cosmeticItemApis = {
  getCosmeticItemByPage: async (): Promise<CosmeticItem[]> => {
    const response = await api.get('/items');
    return response.data;
  },
};
