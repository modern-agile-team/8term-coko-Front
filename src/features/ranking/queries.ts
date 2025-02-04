import { useSuspenseQuery } from '@tanstack/react-query';
import type { RankingSort } from './types';
import rankingApis from './apis';

const rankingKeys = {
  all: ['rankings'] as const,
  paginated: (sort: RankingSort, page: number) =>
    [...rankingKeys.all, sort, page] as const,
};

export const useRankingPaginationQuery = {
  getRankingByPage: (sort: RankingSort = 'level', page: number) => {
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
