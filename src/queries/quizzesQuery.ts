import { useQuery } from '@tanstack/react-query';
import quizzesApis from './../apis/quizzesApis';
const QuizzesQuery = {
  get: (params?: { sectionId?: number; partId: number }) => {
    return useQuery({
      queryKey: ['quizzes', params],
      queryFn: () => quizzesApis.getquizzes(params),
    });
  },
};
export default QuizzesQuery;
