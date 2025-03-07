import { CosmeticItem } from '@/features/store/types';
import type { User } from '@features/user/types';

type EquippedItems = { item: CosmeticItem }[];

export interface RankingPagination {
  totalCount: number;
  totalPage: number;
  currentPage: number;
  limit: number;
  contents: Omit<User, 'createdAt'>[];
  equippedItems: EquippedItems[];
}

export type RankingSort = 'level' | 'point' | 'totalAttendance';
