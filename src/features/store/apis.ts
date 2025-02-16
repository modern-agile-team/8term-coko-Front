import api from '@/axios/instance';
import { CosmeticItem, CosmeticItemOption } from '@/features/store/types';

export const cosmeticItemApis = {
  getCosmeticItemByPage: async (
    params: CosmeticItemOption['query'] & {
      page: number;
      limit: number;
    }
  ): Promise<{
    totalCount: number;
    totalPage: number;
    currentPage: number;
    contents: CosmeticItem[];
  }> => {
    const response = await api.get('/items', { params });
    return response.data;
  },
};
