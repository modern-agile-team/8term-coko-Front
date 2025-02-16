import { cosmeticItemApis } from '@/features/store/apis';
import { CosmeticItemOption } from '@/features/store/types';
import { useQuery } from '@tanstack/react-query';

const cosmeticItemKeys = {
  all: ['cosmeticItem'] as const,
  categoryOnly: () => [...cosmeticItemKeys.all, 'category'] as const,
  category: (category: CosmeticItemOption['query']) =>
    [...cosmeticItemKeys.categoryOnly(), category] as const,

  paginationOnly: (page: number, limit: number) =>
    [...cosmeticItemKeys.all, 'pagination', { page, limit }] as const,
  paginationWithCategory: (
    params: CosmeticItemOption['query'] & { page: number; limit: number }
  ) =>
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
  getCosmeticItemByPage: ({
    params,
    isFetching,
  }: {
    params: CosmeticItemOption['query'] & {
      page: number;
      limit: number;
    };
    isFetching: boolean;
  }) =>
    useQuery({
      queryKey: cosmeticItemKeys.paginationWithCategory(params),
      queryFn: () => cosmeticItemApis.getCosmeticItemByPage(params),
      enabled: isFetching,
    }),
};
