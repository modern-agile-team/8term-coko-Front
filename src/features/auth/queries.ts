import { useQuery, useMutation } from '@tanstack/react-query';
import authApis from '@features/auth/apis';

const authKeys = {
  all: ['auth'] as const,
  verify: () => [...authKeys.all, 'verify'] as const,
  logout: () => [...authKeys.all, 'logout'] as const,
};

export const authQuery = {
  verify: () => {
    return useQuery({
      queryKey: authKeys.verify(),
      queryFn: authApis.verify,
      staleTime: 0,
      gcTime: 0,
      retry: false,
    });
  },

  logout: () => {
    return useMutation({
      mutationKey: authKeys.logout(),
      mutationFn: authApis.logout,
    });
  },
};
