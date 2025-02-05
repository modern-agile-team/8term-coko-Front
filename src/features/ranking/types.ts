import type { User } from '@features/user/types';

export interface RankingPagination {
  totalCount: number;
  totalPage: number;
  currentPage: number;
  limit: number;
  contents: Omit<User, 'createdAt'>[];
}

export type RankingSort = 'level' | 'point';
