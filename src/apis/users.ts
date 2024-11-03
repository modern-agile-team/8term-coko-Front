import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from './axios/instance';
const progressQuery = {
  put: () => {
    return useMutation({
      mutationFn: ({
        userId,
        quizId,
        body,
      }: {
        userId: number;
        quizId: number;
        body: Record<'isCorrect', boolean>;
      }) => api.put(`/users/${userId}/progress/quizzes/${quizId}`, body),
    });
  },
};
export default progressQuery;
