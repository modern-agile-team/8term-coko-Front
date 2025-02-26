import { quizzesApis } from '@features/quiz/apis';
import { useSuspenseQuery } from '@tanstack/react-query';

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
      queryFn: () => quizzesApis.get({ partId }),
    });
  },
};

export const usePartQuery = {};
