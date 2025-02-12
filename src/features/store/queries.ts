import { cosmeticItemApis } from '@/features/store/apis';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

const cosmeticItemKeys = {
  all: ['cosmeticItem'] as const,
};

export const useCosmeticItemQuery = {
  getCosmeticItemByPage: (isFetching: boolean) =>
    useQuery({
      queryKey: cosmeticItemKeys.all,
      queryFn: cosmeticItemApis.getCosmeticItemByPage,
      enabled: isFetching,
    }),
};
