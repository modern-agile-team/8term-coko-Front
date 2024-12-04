import { useQuery } from '@tanstack/react-query';
import quizzesApis from '@apis/quizzesApis';
const quizKeys = {
  all: ['quizzes'],
  filters: () => [...quizKeys.all, 'filter'],
  parts: () => [...quizKeys.all, 'parts'] as const,
  part: (partId: number) => [...quizKeys.parts(), partId] as const,
};
const QuizzesQuery = {
  get: ({ partId }: { partId: number }) => {
    return useQuery({
      queryKey: quizKeys.part(partId),
      queryFn: () => quizzesApis.getQuizzes({ partId }),
    });
  },
};
export default QuizzesQuery;
