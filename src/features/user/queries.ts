import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import usersApis from '@features/user/apis';
import type { ExperiencedUser } from '@features/user/types';
import type { Section, Part } from '@features/learn/types';

const userKeys = {
  all: ['users'] as const,
  me: () => [...userKeys.all, 'me'] as const,
  experience: () => [...userKeys.me(), 'experience'] as const,
  quizzes: () => [...userKeys.me(), 'quizzes'],
  partQuizzes: (partId: number) => [...userKeys.quizzes(), partId],
  progress: (sectionId?: Section['id'], partId?: Part['id']) =>
    sectionId || partId
      ? ([...userKeys.me(), 'progress', { sectionId, partId }] as const)
      : ([...userKeys.me(), 'progress'] as const),
};

export const useUserProgressQuery = {
  getProgress: (params?: {
    sectionId?: Section['id'];
    partId?: Part['id'];
  }) => {
    return useQuery({
      queryKey: userKeys.progress(params?.sectionId, params?.partId),
      queryFn: () => usersApis.getProgress(params),
    });
  },
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
