import { NavigateFunction } from 'react-router-dom';

interface QuizNavigationParams {
  partId: number;
}

export const navigateToQuizPart = (
  navigate: NavigateFunction,
  params: QuizNavigationParams
) => {
  // state로 part를 전달
  navigate(`/quiz`, {
    state: { ...params },
  });
};
