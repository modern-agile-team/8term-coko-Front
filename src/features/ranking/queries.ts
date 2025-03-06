import { useQuery } from '@tanstack/react-query';
import rankingApis from './apis';
import type { RankingSort } from './types';

const rankingKeys = {
  all: ['rankings'] as const,
  personal: (sort: RankingSort) =>
    ['users', 'me', ...rankingKeys.all, sort] as const,
  paginated: (sort: RankingSort, page: number) =>
    [...rankingKeys.all, sort, page] as const,
};

export const rankingPaginationQuery = {
  useGetRankingByPage: (
    sort: RankingSort = 'level',
    page: number,
    limit: number = 5
  ) => {
    return useQuery({
      queryKey: rankingKeys.paginated(sort, page),
      queryFn: () =>
        rankingApis.getRankingByPage({
          sort,
          page,
          limit,
        }),
    });
  },
};
