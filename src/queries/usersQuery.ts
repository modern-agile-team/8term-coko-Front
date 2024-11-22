import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import usersApis from '../apis/usersApis';
import Experience from '../types/Experience';
import User from '../types/User';
const userKeys = {
  all: ['users'] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
  experience: (userId: number) =>
    [...userKeys.detail(userId), 'experience'] as const,
  quizzes: (userId: number) => [...userKeys.detail(userId), 'quizzes'],
  partQuizzes: (userId: number, partId: number) => [
    ...userKeys.quizzes(userId),
    partId,
  ],
};

const progressQuery = {
  put: () => {
    return useMutation({ mutationFn: usersApis.putQuizzesProgress });
  },
};
const userQuizzesQuery = {
  get: ({ userId, partId }: { userId: number; partId: number }) => {
    console.log(12);
    return useQuery({
      queryKey: userKeys.partQuizzes(userId, partId),
      queryFn: () => usersApis.getQuizzes({ id: userId, partId }),
    });
  },
};
const experienceQuery = {
  get: (id: User['id']) => {
    return useQuery({
      queryKey: userKeys.experience(id),
      queryFn: () => usersApis.getExperience(id),
      gcTime: 0,
      staleTime: 0,
      enabled: !!id,
    });
  },
  patch: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.patchExperience,
      onMutate: async newExperience => {
        await queryClient.cancelQueries({
          queryKey: userKeys.experience(newExperience.id),
          exact: true,
        });
        const previousExperience = queryClient.getQueryData<Experience>(
          userKeys.experience(newExperience.id)
        );
        queryClient.setQueryData(
          userKeys.experience(newExperience.id),
          (old: Experience) => {
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
          userKeys.experience(newExperience.id),
          context?.previousExperience
        );
      },
      onSettled: (data, error, newExperience) => {
        queryClient.invalidateQueries({
          queryKey: userKeys.experience(newExperience.id),
        });
      },
    });
  },
};
export { progressQuery, experienceQuery, userQuizzesQuery };
