import { cosmeticItemApis } from '@/features/store/apis';
import {
  CosmeticItemOption,
  CosmeticItemsQueryParams,
} from '@/features/store/types';
import { useUserCosmeticItemsQuery } from '@/features/user/queries';
import { useSuspenseQuery } from '@tanstack/react-query';

const cosmeticItemKeys = {
  all: ['cosmeticItem'] as const,
  categoryOnly: () => [...cosmeticItemKeys.all, 'category'] as const,
  category: (category: CosmeticItemOption['query']) =>
    [...cosmeticItemKeys.categoryOnly(), category] as const,

  paginationOnly: (page: number, limit: number) =>
    [...cosmeticItemKeys.all, 'pagination', { page, limit }] as const,
  paginationWithCategory: (params: CosmeticItemsQueryParams) =>
    [
      ...cosmeticItemKeys.category({
        mainCategoryId: params.mainCategoryId,
        subCategoryId: params.subCategoryId,
      }),
      'pagination',
      { page: params.page, limit: params.limit },
    ] as const,
};

export const useCosmeticItemQuery = {
  getCosmeticItemByPage: (params: CosmeticItemsQueryParams) =>
    useSuspenseQuery({
      queryKey: cosmeticItemKeys.paginationWithCategory(params),
      queryFn: () => cosmeticItemApis.getCosmeticItemByPage(params),
    }),
  getCosmeticItem: (
    params: CosmeticItemsQueryParams & { isMyItemsVisible: boolean }
  ) => {
    const { isMyItemsVisible, ...restProps } = params;
    const useCosmeticItemQueryToUse = isMyItemsVisible
      ? useUserCosmeticItemsQuery.getMyCosmeticItemByPage
      : useCosmeticItemQuery.getCosmeticItemByPage;
    return useCosmeticItemQueryToUse(restProps);
  },
};
