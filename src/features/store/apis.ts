import api from '@/axios/instance';
import {
  CosmeticItemsQueryParams,
  PaginationCosmeticItem,
} from '@/features/store/types';

export const cosmeticItemApis = {
  getCosmeticItemByPage: async (
    params: CosmeticItemsQueryParams
  ): Promise<PaginationCosmeticItem> => {
    const response = await api.get('/items', { params });
    return response.data;
  },
};
