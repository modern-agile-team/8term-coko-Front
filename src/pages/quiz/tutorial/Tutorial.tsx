import withQuizzes from '@/features/quiz/hocs/withQuizzes';
import { TUTORIAL_ID } from '@/features/tutorial/constants';
import TutorialContainer from '@/features/tutorial/ui/TutorialContainer';
import TutorialHeader from '@/features/tutorial/ui/TutorialHeader';
import { HeaderSection } from '@/pages/quiz/styles';
import { AlignCenter } from '@/style/LayOut';
import { useBeforeUnload } from '@modern-kit/react';

export default function Tutorial() {
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
