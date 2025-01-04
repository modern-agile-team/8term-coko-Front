import quizzesApis from '@features/quiz/apis';
import { useQuery } from '@tanstack/react-query';

const quizKeys = {
  all: ['quizzes'],
  filters: () => [...quizKeys.all, 'filter'],
  parts: () => [...quizKeys.all, 'parts'] as const,
  part: (partId: number) => [...quizKeys.parts(), partId] as const,
};

export const quizzesQuery = {
  getQuizzes: ({ partId }: { partId: number }) => {
    return useQuery({
      queryKey: quizKeys.part(partId),
      queryFn: () => quizzesApis.get({ partId }),
    });
  },
};
