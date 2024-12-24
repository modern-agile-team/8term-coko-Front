import { useQuery } from '@tanstack/react-query';
import quizzesApis from '@features/quiz/apis'

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
      queryFn: () => quizzesApis.getQuizzes({ partId }),
      //유저가 있으면 요청 x 또는 partId가 없으면
    });
  },
};

