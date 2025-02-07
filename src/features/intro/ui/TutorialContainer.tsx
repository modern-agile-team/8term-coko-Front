import ProgressBar from '@/features/progress/ui/ProgressBar';
import withQuizzes from '@/features/quiz/hocs/withQuizzes';
import { Quiz } from '@/features/quiz/types';
import Combination from '@/features/quiz/ui/Combination';
import MultipleChoice from '@/features/quiz/ui/MultipleChoice';
import OXSelector from '@/features/quiz/ui/OXSelector';
import Question from '@/features/quiz/ui/Question';
import Result from '@/features/quiz/ui/Result';
import ShortAnswer from '@/features/quiz/ui/ShortAnswer';
import {
  ProgressSection,
  ResponseButton,
  SubmitSection,
} from '@/features/quiz/ui/styles';
import { useElementRect } from '@/features/intro/service/hooks';
import QuizTutorial from '@/features/intro/ui/QuizTutorial';

import TutorialClear from '@/features/intro/ui/TutorialClear';
import useModal from '@/hooks/useModal';

import { useClientQuizStore } from '@/store/useClientQuizStore';
import isEqualArray from '@/utils/isEqualArray';
import { SwitchCase, useUnmount, useTimeout } from '@modern-kit/react';
import { useEffect, useState } from 'react';

interface TutorialProps {
  quizzes: Quiz[];
}
function TutorialContainer({ quizzes }: TutorialProps) {
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
  const [caseName, setCaseName] = useState<'result' | 'tutorialClear'>(
    'result'
  );
  const [showTutorial, setShowTutorial] = useState(false);

  useTimeout(() => setShowTutorial(true), 100);
  useEffect(() => {
    if (isQuizFinished) {
      setCaseName('tutorialClear');
    }
  }, [isCorrectList]);
  useUnmount(() => reset());
  const { Modal, closeModal, isShow, openModal } = useModal();
  const { getClientRectRefCallback } = useElementRect();

  return (
    <>
      <ProgressSection id="progress-bar" ref={getClientRectRefCallback}>
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
          ref={getClientRectRefCallback}
          onClick={() => {
            pushIsCorrectList(false);
            openModal();
          }}
        >
          SKIP
        </ResponseButton>

        <ResponseButton
          id="submit-button"
          ref={getClientRectRefCallback}
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
          value={caseName}
          caseBy={{
            result: (
              <Result
                openModal={openModal}
                partStatus={'COMPLETED'}
                quizId={id}
                onNext={() => {}}
                isCorrect={!!isCorrectList[currentPage]}
                answer={answer}
                closeModal={closeModal}
                isQuizFinished={false}
              />
            ),
            tutorialClear: <TutorialClear />,
          }}
        />
      </Modal>
      {showTutorial && <QuizTutorial category={category} />}
    </>
  );
}

export default withQuizzes(TutorialContainer);
