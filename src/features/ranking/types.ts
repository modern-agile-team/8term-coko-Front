import type { User, RankedUser } from '@features/user/types';

export interface RankingPagination {
  totalCount: number;
  totalPage: number;
  currentPage: number;
  limit: number;
  contents: Omit<User, 'createdAt'>[];
}

export interface PersonalRanking extends Pick<RankedUser, 'ranking'> {}

export type RankingSort = 'level' | 'point';
