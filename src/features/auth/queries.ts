import { useMutation, useQuery } from '@tanstack/react-query';
import authApis from '@features/auth/apis';

const authKeys = {
  verify: ['auth', 'verify'] as const,
  logout: ['auth', 'logout'] as const,
};

export const authQuery = {
  verify: () => {
    return useQuery({
      queryKey: authKeys.verify,
      queryFn: authApis.verify,
      retry: false,
    });
  },
  logout: () => {
    return useMutation({
      mutationKey: authKeys.logout,
      mutationFn: authApis.logout,
    });
  },
};
