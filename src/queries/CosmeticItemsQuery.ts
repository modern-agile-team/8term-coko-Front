import cosmeticItemApis from '@/apis/cosmeticItemsApis';
import { useQuery } from '@tanstack/react-query';

const CosmeticItemKey = {
  all: ['CosmeticItems'],
};

const CosmeticItemsQuery = {
  get: () => {
    return useQuery({
      queryKey: CosmeticItemKey.all,
      queryFn: () => cosmeticItemApis.getCosmeticItem(),
    });
  },
};

export default CosmeticItemsQuery;
