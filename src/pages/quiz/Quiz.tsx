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
import TotalResults from '@features/quiz/ui/TotalResults';
import PartClear from '@features/quiz/ui/PartClear';
import componentMapping from '@utils/componentMap';
import isEqualArray from '@utils/isEqualArray';
import type { Quiz } from '@features/quiz/types';

//퀴즈페이지
export default function Quiz() {
  const isImageLoading = usePreloadImages({
    imageUrls: [
      'O버튼.svg',
      'X버튼.svg',
      'O버튼-선택.svg',
      'X버튼-선택.svg',
      '정답모달.svg',
      '오답모달.svg',
      '객관식-코코.svg',
      '과일바구니.svg',
      '단답형이미지1.svg',
      '단답형이미지2.svg',
      '레벨1코코.svg',
      '과일바구니-아이템.svg',
    ],
  });
  const {
    currentPage,
    totalResults,
    userResponseAnswer,
    reset,
    pushTotalResults,
  } = useClientQuizStore();
  const { user } = useUserStore();
  const { Modal, closeModal, openModal, isShow } = useModal();
  const { partId, state } = useLocation().state as {
    partId: number;
    state?: 'start' | 'pending' | 'end';
  };
  const { data: quizzes, isLoading } =
    user && state === 'pending'
      ? userQuizzesQuery.get({
          userId: user!.id,
          partId,
        })
      : quizzesQuery.get({
          partId,
        });
  const isQuizAnswered = userResponseAnswer[0] === '';
  const isQuizFinished = totalResults.length === quizzes?.length;
  const { Funnel, setStep } = useFunnel('결과');
  useEffect(() => {
    if (totalResults.length === 2 && !user) {
      setStep('로그인 유도');
    }
    if (isQuizFinished) {
      setStep('총결과');
    }
    if (totalResults.length !== 0) {
      openModal();
    }
  }, [totalResults]);
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
          $progress={totalResults.length}
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
            pushTotalResults(false);
          }}
        >
          SKIP
        </ResponseButton>

        <ResponseButton
          disabled={isQuizAnswered}
          $disabled={isQuizAnswered}
          onClick={() => {
            pushTotalResults(isEqualArray(userResponseAnswer, answer));
          }}
        >
          제출
        </ResponseButton>
      </SubmitSection>
      <Modal isShow={isShow}>
        <Funnel>
          <Funnel.Step name="결과">
            <Result
              quizId={id}
              isResult={totalResults[currentPage]}
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
