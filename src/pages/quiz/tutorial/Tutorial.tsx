import Header from '@/common/layout/Header';
import ProgressBar from '@/features/progress/ui/ProgressBar';
import Combination from '@/features/quiz/ui/Combination';
import MultipleChoice from '@/features/quiz/ui/MultipleChoice';
import OXSelector from '@/features/quiz/ui/OXSelector';
import Question from '@/features/quiz/ui/Question';
import ShortAnswer from '@/features/quiz/ui/ShortAnswer';
import { TUTORIAL_QUIZZES } from '@/features/tutorial/constants';
import QuizTour from '@/features/tutorial/ui/QuizTour';
import {
  HeaderSection,
  ProgressSection,
  SubmitSection,
  ResponseButton,
} from '@/pages/quiz/styles';
import { AlignCenter } from '@/style/LayOut';
import { SwitchCase } from '@modern-kit/react';

export default function Tutorial() {
  const { id, title, question, category, answerChoice, answer } =
    TUTORIAL_QUIZZES[0];

  return (
    <>
      <AlignCenter>
        <HeaderSection>
          <title>{title} -coko 튜토리얼</title>
          <Header />
        </HeaderSection>
        <ProgressSection>
          <ProgressBar
            $maxWidth="100%"
            $height="100%"
            $progress={1}
            $maxProgress={10}
            $innerBgColor="#63DDE8"
            $boxBgColor="#F4F4F4"
          />
        </ProgressSection>
        <Question title={title} question={question} category={category} />
        <SwitchCase
          value={category}
          caseBy={{
            COMBINATION: (
              <Combination answerChoice={answerChoice} answer={answer} />
            ),
            MULTIPLE_CHOICE: <MultipleChoice answerChoice={answerChoice} />,
            OX_SELECTOR: <OXSelector />,
            SHORT_ANSWER: <ShortAnswer />,
          }}
        />
        <SubmitSection>
          <ResponseButton>SKIP</ResponseButton>

          <ResponseButton disabled={false} $disabled={false} onClick={() => {}}>
            제출
          </ResponseButton>
        </SubmitSection>
        <QuizTour />
      </AlignCenter>
    </>
  );
}
