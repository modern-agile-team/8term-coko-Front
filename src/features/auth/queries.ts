import { useQuery, useMutation } from '@tanstack/react-query';
import authApis from '@features/auth/apis';
import { isAxiosError } from 'axios';

const authKeys = {
  all: ['users'] as const,
  verify: () => [...authKeys.all, 'verify'] as const,
  logout: () => [...authKeys.all, 'logout'] as const,
};

export const authQuery = {
  useVerify: () => {
    return useQuery({
      queryKey: authKeys.verify(),
      queryFn: async () => {
        try {
          await authApis.verify();
        } catch (error: unknown) {
          if (isAxiosError(error) && error.response?.status === 401) {
            await authApis.newAccessToken();
            return await authApis.verify();
          }
          throw error;
        }
      },
      staleTime: 0,
      gcTime: 0,
      throwOnError: false,
      refetchOnWindowFocus: false,
      retry: false,
    });
  },

  useLogout: () => {
    return useMutation({
      mutationKey: authKeys.logout(),
      mutationFn: authApis.logout,
    });
  },
};
