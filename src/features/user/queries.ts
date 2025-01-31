import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import usersApis from '@features/user/apis';
import type { ExperiencedUser } from '@features/user/types';

const userKeys = {
  all: ['users'] as const,
  detail: () => [...userKeys.all, 'me'] as const,
  experience: () => [...userKeys.detail(), 'experience'] as const,
  quizzes: () => [...userKeys.detail(), 'quizzes'] as const,
  partQuizzes: (partId: number) => [...userKeys.quizzes(), partId] as const,
  hp: () => [...userKeys.detail(), 'hp'] as const,
};

export const useUserHpQuery = {
  getHp: () => {
    return useSuspenseQuery({
      queryKey: userKeys.hp(),
      queryFn: usersApis.getHp,
      retry: 0,
    });
  },
  updateHp: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.patchHp,
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: userKeys.hp() });
      },
    });
  },
};

export const useUserProgressQuery = {
  updateQuizProgress: () => {
    return useMutation({ mutationFn: usersApis.putQuizzesProgress });
  },
};

export const useUserQuizzesQuery = {
  getQuizzes: ({ partId }: { partId: number }) => {
    return useSuspenseQuery({
      queryKey: userKeys.partQuizzes(partId),
      queryFn: () => usersApis.getQuizzes({ partId }),
      gcTime: 0,
      staleTime: 0,
    });
  },
};

export const useUserExperienceQuery = {
  getExperience: () => {
    return useQuery({
      queryKey: userKeys.experience(),
      queryFn: () => usersApis.getExperience(),
      gcTime: 0,
      staleTime: 0,
    });
  },
  updateExperience: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.patchExperience,
      onMutate: async newExperience => {
        await queryClient.cancelQueries({
          queryKey: userKeys.experience(),
          exact: true,
        });
        const previousExperience = queryClient.getQueryData<ExperiencedUser>(
          userKeys.experience()
        );
        queryClient.setQueryData(
          userKeys.experience(),
          (old: ExperiencedUser) => {
            //경험치 증가 로직
            if (!old) return old;
            old.experience += newExperience.experience;
            while (old.experience >= old.experienceForNextLevel) {
              old.experience = Math.abs(
                old.experienceForNextLevel - old.experience
              );
              if (old.experience >= 0) {
                old.level++;
                old.experienceForNextLevel *= 1.2;
              }
            }
            return old;
          }
        );
        return { previousExperience };
      },
      onError: (err, newExperience, context) => {
        queryClient.setQueryData(
          userKeys.experience(),
          context?.previousExperience
        );
      },
      onSettled: (data, error, newExperience) => {
        queryClient.invalidateQueries({
          queryKey: userKeys.experience(),
        });
      },
    });
  },
};

export const useUserPointQuery = {
  updatePoint: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.patchPoint,
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: userKeys.all,
        });
      },
    });
  },
};

export const useUserPartProgressQuery = {
  updatePartProgress: () => {
    return useMutation({
      mutationFn: usersApis.partProgress,
    });
  },
};
