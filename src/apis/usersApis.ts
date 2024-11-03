import api from './axios/instance';
const usersApis = {
  putQuizzesProgress: ({
    userId,
    quizId,
    body,
  }: {
    userId: number;
    quizId: number;
    body: Record<'isCorrect', boolean>;
  }) => api.put(`/users/${userId}/progress/quizzes/${quizId}`, body),
};
export default usersApis;
