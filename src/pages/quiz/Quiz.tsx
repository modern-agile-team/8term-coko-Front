import {
  HeaderSection,
  ProgressSection,
  ResponseButton,
  SubmitSection,
} from './styles';
import { AlignCenter } from '@/style/LayOut';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useBeforeUnload from '@/hooks/useBeforeUnload';
import useModal from '@hooks/useModal';
import usePreloadImages from '@hooks/usePreloadImages';
import useFunnel from '@hooks/useFunnel';
import { useUnmount } from '@modern-kit/react';
import { noop } from '@modern-kit/utils';
import { useClientQuizStore } from '@store/useClientQuizStore';
import useUserStore from '@store/useUserStore';
import { quizzesQuery } from '@features/quiz/queries';
import { userQuizzesQuery } from '@features/user/queries';
import Header from '@common/layout/Header';
import ProgressBar from '@features/progress/ui/ProgressBar';
import LoginPrompt from '@features/login/ui/LoginPrompt';
import Login from '@features/login/ui/Login';
import Question from '@features/quiz/ui/Question';
import Combination from '@features/quiz/ui/Combination';
import MultipleChoice from '@features/quiz/ui/MultipleChoice';
import OXSelector from '@features/quiz/ui/OXSelector';
import ShortAnswer from '@features/quiz/ui/ShortAnswer';
import Result from '@features/quiz/ui/Result';
import TotalResults from '@features/user/ui/TotalResults';
import PartClear from '@features/user/ui/PartClear';
import componentMapping from '@utils/componentMap';
import isEqualArray from '@utils/isEqualArray';
import type { PartStatus, Quiz } from '@features/quiz/types';
import { preloadImages } from '@features/quiz/constants';
import { isLoggedIn } from '@/features/user/service/authUtils';

//퀴즈페이지
export default function Quiz() {
  const isImageLoading = usePreloadImages({
    imageUrls: preloadImages,
  });

  const {
    currentPage,
    isCorrectList,
    userResponseAnswer,
    reset,
    pushIsCorrectList,
  } = useClientQuizStore();
  const { user } = useUserStore();

  const { Modal, closeModal, openModal, isShow } = useModal();
  const { partId, partStatus } = useLocation().state as {
    partId: number;
    partStatus: PartStatus;
  };

  const isInProgress = status === 'IN_PROGRESS';
  const isQuizAnswered = userResponseAnswer[0] === '';

  const { data: quizzes, isLoading } =
    isLoggedIn(user) && isInProgress
      ? userQuizzesQuery.get({
          userId: user.id,
          partId,
        })
      : quizzesQuery.get({
          partId,
        });
  const isQuizFinished = isCorrectList.length === quizzes?.length;
  const { Funnel, setStep } = useFunnel('결과');

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

  if (isLoading || isImageLoading) return <div>Loading</div>;
  if (!quizzes) return <div>404</div>;
  const { id, title, question, category, answerChoice, answer } =
    quizzes[currentPage];

  const getComponentMappingByChoiceType = componentMapping<
    Pick<Quiz, 'answerChoice'> | Pick<Quiz, 'answer'>
  >({
    COMBINATION: Combination,
    MULTIPLE_CHOICE: MultipleChoice,
    OX_SELECTOR: OXSelector,
    SHORT_ANSWER: ShortAnswer,
  });
  return (
    <AlignCenter>
      <HeaderSection>
        <Header />
      </HeaderSection>
      <ProgressSection>
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
      {getComponentMappingByChoiceType(category, { answerChoice, answer })}
      <SubmitSection>
        <ResponseButton
          onClick={() => {
            pushIsCorrectList(false);
          }}
        >
          SKIP
        </ResponseButton>

        <ResponseButton
          disabled={isQuizAnswered}
          $disabled={isQuizAnswered}
          onClick={() => {
            pushIsCorrectList(isEqualArray(userResponseAnswer, answer));
          }}
        >
          제출
        </ResponseButton>
      </SubmitSection>
      <Modal isShow={isShow}>
        <Funnel>
          <Funnel.Step name="결과">
            <Result
              partStatus={partStatus}
              quizId={id}
              isCorrect={isCorrectList[currentPage]}
              answer={answer}
              closeModal={closeModal}
            />
          </Funnel.Step>
          <Funnel.Step name="로그인 유도">
            <LoginPrompt onNext={() => setStep('로그인')} />
          </Funnel.Step>
          <Funnel.Step name="로그인">
            <Login closeModal={noop} openModal={noop} />
          </Funnel.Step>
          <Funnel.Step name="총결과">
            <TotalResults
              onNext={() => setStep('파트 클리어')}
              quizzesLength={quizzes.length}
              partId={partId}
              partStatus={partStatus}
            />
          </Funnel.Step>
          <Funnel.Step name="파트 클리어">
            <PartClear partId={partId} />
          </Funnel.Step>
        </Funnel>
      </Modal>
    </AlignCenter>
  );
}
