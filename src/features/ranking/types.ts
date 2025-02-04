import type { User, RankedUser } from '@features/user/types';

export interface RankingPagination {
  totalCount: number;
  totalPage: number;
  currentPage: number;
  limit: number;
  contents: Omit<User, 'createdAt'>[];
}

export interface UserRanking extends Pick<RankedUser, 'myRanking'> {}

export type RankingSort = 'level' | 'point';
