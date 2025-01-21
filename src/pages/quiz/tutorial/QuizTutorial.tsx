import withQuizzes from '@/features/quiz/hocs/withQuizzes';
import { TUTORIAL_ID } from '@/features/tutorial/constants';
import TutorialContainer from '@/features/tutorial/ui/TutorialContainer';
import TutorialHeader from '@/features/tutorial/ui/TutorialHeader';
import { AlignCenter, HeaderSection } from '@/pages/quiz/styles';

import { useBeforeUnload } from '@modern-kit/react';

export default function QuizTutorial() {
  const TutorialWithQuizzes = withQuizzes(TutorialContainer);
  useBeforeUnload();

  return (
    <>
      <AlignCenter>
        <HeaderSection>
          <title>coko 퀴즈 튜토리얼</title>
          <TutorialHeader />
        </HeaderSection>
        <TutorialWithQuizzes partId={TUTORIAL_ID} partStatus="TUTORIAL" />
      </AlignCenter>
    </>
  );
}
