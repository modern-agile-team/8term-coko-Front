import { useQuery } from '@tanstack/react-query';
import authApis from './apis';

const authKeys = {
  verify: ['auth', 'verify'] as const,
};

export const authQuery = {
  verify: () => {
    return useQuery({
      queryKey: authKeys.verify,
      queryFn: authApis.verifyAuth,
      retry: false,
    });
  },
};
