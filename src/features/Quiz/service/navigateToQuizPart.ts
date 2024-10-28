import { NavigateFunction } from 'react-router-dom';

interface QuizNavigationParams {
  sectionId: number;
  part: string;
}

export const navigateToQuizPart = (
  navigate: NavigateFunction,
  params: QuizNavigationParams
) => {
  // state로 sectionId와 part를 전달
  navigate(`/quiz/${params.sectionId}/${params.part}`, {
    state: { ...params },
  });
};
