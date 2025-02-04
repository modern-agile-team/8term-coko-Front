import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type { RankingSort } from './types';
import rankingApis from './apis';

const rankingKeys = {
  all: ['rankings'] as const,
  paginated: (sort: RankingSort, page: number) =>
    [...rankingKeys.all, sort, page] as const,
  abc: (sort: RankingSort) =>
    ['users', 'me', ...rankingKeys.all, sort] as const,
};

export const useUserRankingQuery = {
  getRanking: (sort: RankingSort = 'level') => {
    return useQuery({
      queryKey: rankingKeys.abc(sort),
      queryFn: async () => {
        return await rankingApis.getRanking({ sort });
      },
    });
  },
};

export const useRankingPaginationQuery = {
  getRankingByPage: (sort: RankingSort = 'level', page: number) => {
    return useQuery({
      queryKey: rankingKeys.paginated(sort, page),
      queryFn: () =>
        rankingApis.getRankingByPage({
          sort,
          page,
          limit: 5,
        }),
    });
  },
};
