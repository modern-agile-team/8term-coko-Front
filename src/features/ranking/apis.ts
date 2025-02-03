import api from '@/axios/instance';
import type { RankingPagination, RankingSort } from './types';

const rankingApis = {
  getRankingByPage: async (params: {
    sort: RankingSort;
    page: number;
    limit: number;
  }): Promise<RankingPagination> => {
    const response = await api.get('/rankings', { params });
    return response.data;
  },
};

export default rankingApis;
