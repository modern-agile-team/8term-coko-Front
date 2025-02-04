import api from '@/axios/instance';
import type { RankingPagination, RankingSort, UserRanking } from './types';

const rankingApis = {
  getRanking: async (params: { sort: RankingSort }): Promise<UserRanking> => {
    const response = await api.get('users/me/rankings', { params });
    return response.data;
  },

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
