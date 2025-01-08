import { useQuery, useMutation } from '@tanstack/react-query';
import authApis from '@features/auth/apis';

const authKeys = {
  all: ['users'] as const,
  verify: () => [...authKeys.all, 'verify'] as const,
  logout: () => [...authKeys.all, 'logout'] as const,
};

export const authQuery = {
  verify: () => {
    return useQuery({
      queryKey: authKeys.verify(),
      queryFn: async () => {
        try {
          // 기본 verify 요청
          return await authApis.verify();
        } catch (error: any) {
          // 401 에러 처리
          if (error.response?.status === 401) {
            // 새 accessToken 요청
            await authApis.newAccessToken();
            // Access Token 갱신 후 verify 재요청
            return await authApis.verify();
          }
          // 401 이외의 에러는 상위로 전달
          throw error;
        }
      },
      throwOnError: false,
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
