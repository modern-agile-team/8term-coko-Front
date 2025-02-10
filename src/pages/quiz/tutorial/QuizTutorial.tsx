import { TUTORIAL_ID } from '@/features/intro/constants';
import TutorialWithQuizzes from '@/features/intro/ui/TutorialContainer';
import TutorialHeader from '@/features/intro/ui/TutorialHeader';
import { AlignCenter, HeaderSection } from '@/pages/quiz/styles';

import { useBeforeUnload } from '@modern-kit/react';

export default function QuizTutorial() {
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
