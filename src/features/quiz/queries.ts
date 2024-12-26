import quizzesApis from '@features/quiz/apis';
import { useQuery } from '@tanstack/react-query';

const quizKeys = {
  all: ['quizzes'],
  filters: () => [...quizKeys.all, 'filter'],
  parts: () => [...quizKeys.all, 'parts'] as const,
  part: (partId: number) => [...quizKeys.parts(), partId] as const,
};

export const quizzesQuery = {
  get: ({ partId }: { partId: number }) => {
    return useQuery({
      queryKey: quizKeys.part(partId),
      queryFn: () => quizzesApis.get({ partId }),
      //유저가 있으면 요청 x 또는 partId가 없으면
    });
  },
};
