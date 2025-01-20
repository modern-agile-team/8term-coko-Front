import { useEffect, useState } from 'react';
import useBeforeUnload from '@/hooks/useBeforeUnload';
import useModal from '@hooks/useModal';
import usePreloadImages from '@hooks/usePreloadImages';
import useFunnel from '@hooks/useFunnel';
import { SwitchCase, useUnmount } from '@modern-kit/react';
import { noop } from '@modern-kit/utils';
import { useClientQuizStore } from '@store/useClientQuizStore';
import useUserStore from '@store/useUserStore';
import ProgressBar from '@features/progress/ui/ProgressBar';
import LoginPrompt from '@/features/auth/ui/LoginPrompt';
import Login from '@/features/auth/ui/Login';
import Question from '@features/quiz/ui/Question';
import Combination from '@features/quiz/ui/Combination';
import MultipleChoice from '@features/quiz/ui/MultipleChoice';
import OXSelector from '@features/quiz/ui/OXSelector';
import ShortAnswer from '@features/quiz/ui/ShortAnswer';
import Result from '@features/quiz/ui/Result';
import TotalResults from '@features/user/ui/TotalResults';
import PartClear from '@features/user/ui/PartClear';
import isEqualArray from '@utils/isEqualArray';
import type { Part, PartStatus } from '@features/learn/types';
import type { CaseByModal, Quiz } from '@features/quiz/types';
import { PRELOAD_IMAGES } from '@features/quiz/constants';
import { isLoggedIn } from '@/features/user/service/authUtils';
import {
  ProgressSection,
  SubmitSection,
  ResponseButton,
  GoBackButtonWrapper,
} from '@/pages/quiz/styles';
import GoBackButton from '@/common/ui/GoBackButton';
import GoBackPrompt from '@/common/layout/GoBackPrompt';

interface QuizProps {
  partStatus: PartStatus;
  partId: Part['id'];
}
interface InjectedProps {
  quizzes: Quiz[];
}

export default function QuizContainer({
  quizzes,
  partStatus,
  partId,
}: QuizProps & InjectedProps) {
  usePreloadImages({
    imageUrls: PRELOAD_IMAGES,
  });

  const {
    currentPage,
    isCorrectList,
    userResponseAnswer,
    reset,
    pushIsCorrectList,
    isQuizAnswered,
  } = useClientQuizStore();
  const { user } = useUserStore();

  const { Modal, closeModal, openModal, isShow } = useModal();
  const isQuizFinished = isCorrectList.length === quizzes?.length;

  const [step, setStep] = useState<CaseByModal>('결과');
  useEffect(() => {
    if (isCorrectList.length === 2 && !isLoggedIn(user)) {
      setStep('로그인 유도');
    }
    if (isQuizFinished) {
      setStep('총결과');
    }
    if (isCorrectList.length !== 0) {
      openModal();
    }
  }, [isCorrectList]);
  useUnmount(() => reset());
  useBeforeUnload({
    enabled: !isQuizFinished,
  });

  const { id, title, question, category, answerChoice, answer } =
    quizzes[currentPage];
  const handleGoBackClick = () => {
    setStep('뒤로가기');
    openModal();
  };

  const handleConfirmGoBack = () => {
    closeModal();
    window.history.back();
  };
  return (
    <>
      <ProgressSection>
        <GoBackButtonWrapper>
          <GoBackButton onClick={handleGoBackClick} />
        </GoBackButtonWrapper>
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
          onClick={() => {
            pushIsCorrectList(false);
          }}
        >
          SKIP
        </ResponseButton>

        <ResponseButton
          disabled={isQuizAnswered()}
          $disabled={isQuizAnswered()}
          onClick={() => {
            pushIsCorrectList(isEqualArray(userResponseAnswer, answer));
          }}
        >
          제출
        </ResponseButton>
      </SubmitSection>
      <Modal isShow={isShow}>
        <SwitchCase
          value={step}
          caseBy={{
            결과: (
              <Result
                partStatus={partStatus}
                quizId={id}
                isCorrect={isCorrectList[currentPage]}
                answer={answer}
                closeModal={closeModal}
              />
            ),
            '로그인 유도': <LoginPrompt onNext={() => setStep('로그인')} />,
            로그인: <Login closeModal={noop} openModal={noop} />,
            총결과: (
              <TotalResults
                onNext={() => setStep('파트 클리어')}
                quizzesLength={quizzes.length}
                partId={partId}
                partStatus={partStatus}
              />
            ),
            '파트 클리어': <PartClear partId={partId} />,
            뒤로가기: (
              <GoBackPrompt
                onCancel={closeModal}
                onConfirm={handleConfirmGoBack}
              />
            ),
          }}
        />
      </Modal>
    </>
  );
}
