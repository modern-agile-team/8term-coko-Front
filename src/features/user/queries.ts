import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  userItemsApi,
  userHpApi,
  userOpinionsApi,
  usersApis,
} from '@features/user/apis';
import type { ExperiencedUser } from '@features/user/types';
import type { Section, Part } from '@features/learn/types';
import type { RankingSort } from '@features/ranking/types';
import useUserStore from '@/store/useUserStore';
import { isLoggedIn } from '@/features/user/service/authUtils';
import {
  CosmeticItemOption,
  CosmeticItemsQueryParams,
} from '@/features/store/types';

export const userKeys = {
  all: ['users'] as const,
  me: () => [...userKeys.all, 'me'] as const,
  hp: () => [...userKeys.me(), 'hp'] as const,
  experience: () => [...userKeys.me(), 'experience'] as const,
  quizzes: () => [...userKeys.me(), 'quizzes'] as const,
  partQuizzes: (partId: number) => [...userKeys.quizzes(), partId],
  ranking: (sort: RankingSort) => [...userKeys.me(), sort] as const,
  attendance: {
    root: () => [...userKeys.me(), 'attendance'] as const,
    list: () => [...userKeys.attendance.root(), 'list'] as const,
  },
  quest: {
    daily: () => [...userKeys.me(), 'quest', 'daily'] as const,
    main: () => [...userKeys.me(), 'quest', 'main'] as const,
  },
  sections: {
    paginated: () => [...userKeys.me(), 'sections', 'paginated'] as const,
  },
  progress: {
    root: () => [...userKeys.me(), 'progress'] as const,
    section: (sectionId: Section['id']) =>
      [...userKeys.progress.root(), 'section', sectionId] as const,
    part: (partId: Part['id']) =>
      [...userKeys.progress.root(), 'part', partId] as const,
    detail: (sectionId?: Section['id'], partId?: Part['id']) =>
      sectionId || partId
        ? ([...userKeys.progress.root(), { sectionId, partId }] as const)
        : userKeys.progress.root(),
  },
  cosmeticItems: {
    root: () => [...userKeys.me(), ' cosmeticItems'] as const,
    equipped: () => [...userKeys.cosmeticItems.root(), 'equipped'] as const,
    categoryOnly: () => [...userKeys.cosmeticItems.root(), 'category'] as const,
    category: (category: CosmeticItemOption['query']) =>
      [...userKeys.cosmeticItems.categoryOnly(), category] as const,

    paginationOnly: (page: number, limit: number) =>
      [
        ...userKeys.cosmeticItems.root(),
        'pagination',
        { page, limit },
      ] as const,
    paginationWithCategory: (
      params: CosmeticItemOption['query'] & { page: number; limit: number }
    ) =>
      [
        ...userKeys.cosmeticItems.category({
          mainCategoryId: params.mainCategoryId,
          subCategoryId: params.subCategoryId,
        }),
        'pagination',
        { page: params.page, limit: params.limit },
      ] as const,
  },
};

export const useUserHpQuery = {
  getHp: () => {
    const { user } = useUserStore();
    return useQuery({
      queryKey: userKeys.hp(),
      queryFn: userHpApi.getHp,
      enabled: isLoggedIn(user),
    });
  },
  getHpWithSuspense: () => {
    return useSuspenseQuery({
      queryKey: userKeys.hp(),
      queryFn: userHpApi.getHp,
      retry: 0,
    });
  },

  updateHp: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: userHpApi.patchHp,
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: userKeys.hp() });
      },
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

export const useUserPartStatusQuery = {
  updatePartStatus: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.patchPartStatus,
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: userKeys.progress.root() });
        queryClient.invalidateQueries({
          queryKey: userKeys.sections.paginated(),
        });
      },
    });
  },
  updateCompletedPartStatus: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.patchCompletedPartStatus,
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: userKeys.progress.root() });
        queryClient.invalidateQueries({
          queryKey: userKeys.sections.paginated(),
        });
      },
    });
  },
};

export const useUserProgressQuery = {
  getProgress: (params?: {
    sectionId?: Section['id'];
    partId?: Part['id'];
  }) => {
    return useQuery({
      queryKey: userKeys.progress.detail(params?.sectionId, params?.partId),
      queryFn: () => usersApis.getProgress(params),
    });
  },
  updateQuizProgress: () => {
    return useMutation({ mutationFn: usersApis.putQuizzesProgress });
  },
};

export const useUserRankingQuery = {
  getRanking: (sort: RankingSort = 'level') => {
    const { user } = useUserStore();
    return useQuery({
      queryKey: userKeys.ranking(sort),
      queryFn: () => usersApis.getRanking({ sort }),
      enabled: isLoggedIn(user),
    });
  },
};

export const useUserAttendanceQuery = {
  getAttendanceList: (params: { year: number; month: number }) => {
    return useSuspenseQuery({
      queryKey: userKeys.attendance.list(),
      queryFn: () => usersApis.getAttendanceList(params),
    });
  },
  getAttendance: () =>
    useSuspenseQuery({
      queryKey: userKeys.attendance.root(),
      queryFn: usersApis.getAttendance,
    }),
  recordAttendance: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: usersApis.postAttendance,
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: userKeys.attendance.root() });
      },
    });
  },
};

export const userCosmeticItemsQuery = {
  useGetMyCosmeticItemByPage: (params: CosmeticItemsQueryParams) =>
    useSuspenseQuery({
      queryKey: userKeys.cosmeticItems.root(),
      queryFn: () => userItemsApi.getItems(params),
    }),
  useGetEquippedItem: () => {
    return useQuery({
      queryKey: userKeys.cosmeticItems.equipped(),
      queryFn: () => userItemsApi.getEquippedItems(),
    });
  },
  useResetEquippedItems: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: userItemsApi.putResetEquippedItems,
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: userKeys.cosmeticItems.root(),
        });
      },
    });
  },
  usePurchaseItem: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: userItemsApi.postPurchaseItem,
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: userKeys.all });
      },
    });
  },
  useUpdateEquippedItems: () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: userItemsApi.patchEquippedItems,
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: userKeys.cosmeticItems.root(),
        });
      },
    });
  },
};
export const useUserQuestQuery = {
  getDailyQuest: () => {
    const { user } = useUserStore();
    return useQuery({
      queryKey: userKeys.quest.daily(),
      queryFn: usersApis.getDailyQuest,
      gcTime: 0,
      staleTime: 0,
      enabled: isLoggedIn(user),
    });
  },
};

export const userOpinionsQuery = {
  useCreateOpinions: () => {
    return useMutation({ mutationFn: userOpinionsApi.postOpinions });
  },
};
