import Header from '@/common/layout/Header';
import withQuizzes from '@/features/quiz/hocs/withQuizzes';
import { TUTORIAL_ID } from '@/features/tutorial/constants';
import TutorialContainer from '@/features/tutorial/ui/TutorialContainer';
import { HeaderSection } from '@/pages/quiz/styles';
import { AlignCenter } from '@/style/LayOut';

export default function Tutorial() {
  const TutorialWithQuizzes = withQuizzes(TutorialContainer);

  return (
    <>
      <AlignCenter>
        <HeaderSection>
          <title>coko 퀴즈 튜토리얼</title>
          <Header />
        </HeaderSection>
        <TutorialWithQuizzes partId={TUTORIAL_ID} partStatus="TUTORIAL" />
      </AlignCenter>
    </>
  );
}
