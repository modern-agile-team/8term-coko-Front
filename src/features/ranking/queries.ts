import { useSuspenseQuery } from '@tanstack/react-query';
import type { RankingSort } from './types';
import rankingApis from './apis';

const rankingKeys = {
  all: ['rankings'] as const,
  paginated: (sort: RankingSort, page: number) =>
    [...rankingKeys.all, sort, page] as const,
};

export const useRankingPaginationQuery = {
  getRankingByPage: (page: number, sort: RankingSort = 'level') => {
    return useSuspenseQuery({
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
