import Header from '@/common/layout/Header';
import ProgressBar from '@/features/progress/ui/ProgressBar';
import Combination from '@/features/quiz/ui/Combination';
import MultipleChoice from '@/features/quiz/ui/MultipleChoice';
import OXSelector from '@/features/quiz/ui/OXSelector';
import Question from '@/features/quiz/ui/Question';
import Result from '@/features/quiz/ui/Result';
import ShortAnswer from '@/features/quiz/ui/ShortAnswer';
import { TUTORIAL_QUIZZES } from '@/features/tutorial/constants';
import QuizTour from '@/features/tutorial/ui/QuizTour';
import TutorialClear from '@/features/tutorial/ui/TutorialClear';
import useModal from '@/hooks/useModal';
import {
  HeaderSection,
  ProgressSection,
  SubmitSection,
  ResponseButton,
} from '@/pages/quiz/styles';
import { useClientQuizStore } from '@/store/useClientQuizStore';
import { AlignCenter } from '@/style/LayOut';
import isEqualArray from '@/utils/isEqualArray';
import { SwitchCase, useUnmount } from '@modern-kit/react';
import { useEffect, useState } from 'react';

export default function Tutorial() {
  const {
    currentPage,
    isCorrectList,
    userResponseAnswer,
    pushIsCorrectList,
    isQuizAnswered,
    reset,
  } = useClientQuizStore();

  const { id, title, question, category, answerChoice, answer } =
    TUTORIAL_QUIZZES[currentPage];
  const isQuizFinished = isCorrectList.length === TUTORIAL_QUIZZES.length;
  const [caseNaem, setCaseName] = useState<'result' | 'tutorialClear'>(
    'result'
  );
  useEffect(() => {
    if (isQuizFinished) {
      setCaseName('tutorialClear');
    }
  }, [isCorrectList]);
  useUnmount(() => reset());
  const { Modal, closeModal, isShow, openModal } = useModal();

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
            $progress={isCorrectList.length}
            $maxProgress={TUTORIAL_QUIZZES.length}
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
          <ResponseButton
            onClick={() => {
              pushIsCorrectList(false);
              openModal();
            }}
          >
            SKIP
          </ResponseButton>

          <ResponseButton
            disabled={isQuizAnswered()}
            $disabled={isQuizAnswered()}
            onClick={() => {
              pushIsCorrectList(isEqualArray(userResponseAnswer, answer));
              openModal();
            }}
          >
            제출
          </ResponseButton>
        </SubmitSection>
        <QuizTour category={category} />
      </AlignCenter>
      <Modal isShow={isShow}>
        <SwitchCase
          value={caseNaem}
          caseBy={{
            result: (
              <Result
                partStatus={'COMPLETED'}
                quizId={id}
                isCorrect={isCorrectList[currentPage]}
                answer={answer}
                closeModal={closeModal}
              />
            ),
            tutorialClear: <TutorialClear />,
          }}
        ></SwitchCase>
      </Modal>
    </>
  );
}
