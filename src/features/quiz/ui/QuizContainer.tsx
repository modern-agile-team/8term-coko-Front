import { useEffect, useState } from 'react';
import useBeforeUnload from '@/hooks/useBeforeUnload';
import useModal from '@hooks/useModal';
import usePreloadImages from '@hooks/usePreloadImages';
import { SwitchCase, useUnmount } from '@modern-kit/react';
import { noop } from '@modern-kit/utils';
import { useClientQuizStore } from '@/features/quiz/stores';
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
import type { ModalType, Quiz } from '@features/quiz/types';
import { PRELOAD_IMAGES } from '@features/quiz/constants';
import { isLoggedIn } from '@/features/user/service/authUtils';

import GoBackButton from '@/common/ui/GoBackButton';
import GoBackPrompt from '@/common/layout/GoBackPrompt';
import {
  GoBackButtonWrapper,
  ProgressSection,
  ResponseButton,
  RightAlignedBox,
  SubmitSection,
} from '@/features/quiz/ui/styles';
import withQuizzes from '@/features/quiz/hocs/withQuizzes';
import { useCheckHp, useHpUpdate } from '@/features/user/hooks';
import OpinionsModalTrigger from '@/features/user/ui/OpinionsModalTrigger';

interface QuizProps {
  partStatus: PartStatus;
  partId: Part['id'];
}
interface InjectedProps {
  quizzes: Quiz[];
}
function QuizContainer({
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

  const [step, setStep] = useState<ModalType>('result');

  useEffect(() => {
    if (isCorrectList.length === 2 && !isLoggedIn(user)) {
      setStep('loginPrompt');
    }
    if (isCorrectList.length !== 0) {
      openModal();
    }
  }, [isCorrectList]);
  useUnmount(() => reset());
  useBeforeUnload({
    enabled: !isQuizFinished,
  });
  useHpUpdate(isCorrectList[currentPage]);
  useCheckHp();

  const { id, title, question, category, answerChoice, answer } =
    quizzes[currentPage];
  const handleGoBackClick = () => {
    setStep('goBack');
    openModal();
  };

  const handleConfirmGoBack = () => {
    closeModal();
    window.history.back();
  };

  const handleCancelGoBack = () => {
    closeModal();
    setStep('result');
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
      <RightAlignedBox>
        <OpinionsModalTrigger quizzes={quizzes} />
      </RightAlignedBox>
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
            result: (
              <Result
                partStatus={partStatus}
                quizId={id}
                isCorrect={!!isCorrectList[currentPage]}
                answer={answer}
                openModal={openModal}
                closeModal={closeModal}
                onNext={() => setStep('totalResult')}
                isQuizFinished={isQuizFinished}
              />
            ),
            loginPrompt: <LoginPrompt onNext={() => setStep('login')} />,
            login: <Login closeModal={noop} openModal={noop} />,
            totalResult: (
              <TotalResults
                onNext={() => setStep('partClear')}
                quizzesLength={quizzes.length}
                partId={partId}
                partStatus={partStatus}
              />
            ),
            partClear: <PartClear partId={partId} />,
            goBack: (
              <GoBackPrompt
                onCancel={handleCancelGoBack}
                onConfirm={handleConfirmGoBack}
              />
            ),
          }}
        />
      </Modal>
    </>
  );
}

export default withQuizzes(QuizContainer);
