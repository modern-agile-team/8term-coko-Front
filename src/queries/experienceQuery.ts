import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import User from '../types/User';
import usersApis from '../apis/usersApis';
import Experience from '../types/Experience';

const experienceQuery = {
  get: (id: User['id']) => {
    return useQuery({
      queryKey: ['experience', id],
      queryFn: () => usersApis.getExperience(id),
      gcTime: 0,
      staleTime: 0,
    });
  },
  patch: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.patchExperience,
      onMutate: async newExperience => {
        await queryClient.cancelQueries({
          queryKey: ['experience', newExperience.id],
        });
        const previousExperience = queryClient.getQueryData<Experience>([
          'experience',
          newExperience.id,
        ]);
        queryClient.setQueryData(
          ['experience', newExperience.id],
          (old: Experience) => {
            //경험치 증가 로직

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
          ['experience', newExperience.id],
          context?.previousExperience
        );
      },
      onSettled: (data, error, newExperience) => {
        queryClient.invalidateQueries({
          queryKey: ['experience', newExperience.id],
        });
      },
    });
  },
};
export default experienceQuery;
