import ProgressBar from '@/features/progress/ui/ProgressBar';
import { Quiz } from '@/features/quiz/types';
import Combination from '@/features/quiz/ui/Combination';
import MultipleChoice from '@/features/quiz/ui/MultipleChoice';
import OXSelector from '@/features/quiz/ui/OXSelector';
import Question from '@/features/quiz/ui/Question';
import Result from '@/features/quiz/ui/Result';
import ShortAnswer from '@/features/quiz/ui/ShortAnswer';
import QuizTutorial from '@/features/tutorial/ui/QuizTutorial';

import TutorialClear from '@/features/tutorial/ui/TutorialClear';
import useModal from '@/hooks/useModal';
import {
  ProgressSection,
  SubmitSection,
  ResponseButton,
} from '@/pages/quiz/styles';
import { useClientQuizStore } from '@/store/useClientQuizStore';
import isEqualArray from '@/utils/isEqualArray';
import { SwitchCase, useUnmount } from '@modern-kit/react';
import { useEffect, useState } from 'react';

interface TutorialProps {
  quizzes: Quiz[];
}
export default function TutorialContainer({ quizzes }: TutorialProps) {
  const {
    currentPage,
    isCorrectList,
    userResponseAnswer,
    pushIsCorrectList,
    isQuizAnswered,
    reset,
  } = useClientQuizStore();

  const { id, title, question, category, answerChoice, answer } =
    quizzes[currentPage];
  const isQuizFinished = isCorrectList.length === quizzes.length;
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
      <QuizTutorial category={category} />
      <ProgressSection id="progress-bar">
        <ProgressBar
          $maxWidth="100%"
          $height="100%"
          $progress={isCorrectList.length}
          $maxProgress={quizzes.length}
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
          id="skip-button"
          onClick={() => {
            pushIsCorrectList(false);
            openModal();
          }}
        >
          SKIP
        </ResponseButton>

        <ResponseButton
          id="submit-button"
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
        />
      </Modal>
    </>
  );
}
