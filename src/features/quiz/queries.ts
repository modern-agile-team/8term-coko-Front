import { partApis, quizzesApis } from '@features/quiz/apis';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

const quizKeys = {
  all: ['quizzes'],
  filters: () => [...quizKeys.all, 'filter'],
  parts: () => [...quizKeys.all, 'parts'] as const,
  part: (partId: number) => [...quizKeys.parts(), partId] as const,
};

export const useQuizzesQuery = {
  getQuizzes: ({ partId }: { partId: number }) => {
    return useSuspenseQuery({
      queryKey: quizKeys.part(partId),
      queryFn: () => quizzesApis.getQuizzes({ partId }),
    });
  },
};

export const usePartQuery = {
  getPart: ({ partId }: { partId: number }) => {
    return useQuery({
      queryKey: quizKeys.parts(),
      queryFn: () => partApis.getPart({ partId }),
    });
  },
};
