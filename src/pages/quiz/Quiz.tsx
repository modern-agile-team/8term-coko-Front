import Question from '@features/quiz/ui/Question';
import { AlignCenter } from '../../style/LayOut';
import {
  HeaderSection,
  ProgressSection,
  ResponseButton,
  SubmitSection,
} from './styles';
import type Quiz from '@type/Quiz';
import { useClientQuizStore } from '@store/useClientQuizStore';
import Combination from '@features/quiz/ui/Combination';
import MultipleChoice from '@features/quiz/ui/MultipleChoice';
import OXSelector from '@features/quiz/ui/OXSelector';
import ShortAnswer from '@features/quiz/ui/ShortAnswer';
import componentMapping from '@utils/componentMap';
import useBeforeUnload from '@/hooks/useBeforeUnload';
import Result from '@features/quiz/ui/Result';
import TotalResults from '@features/quiz/ui/TotalResults';
import isEqualArray from '@utils/isEqualArray';
import quizzesQuery from '@queries/quizzesQuery';
import useModal from '@hooks/useModal';
import usePreloadImages from '@hooks/usePreloadImages';
import { useEffect, useState } from 'react';
import Header from '@common/layout/Header';
import useUserStore from '@store/useUserStore';
import ProgressBar from '@features/progress/ui/ProgressBar';
import { useLocation } from 'react-router-dom';
import { userQuizzesQuery } from '@queries/usersQuery';
import GoToLogin from '@features/login/ui/GoToLogin';
import useFunnel from '@hooks/useFunnel';
import PartClear from '@features/quiz/ui/PartClear';
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
  const { currentPage, totalResults, userResponseAnswer } =
    useClientQuizStore();
  const { user } = useUserStore();
  const [result, setResult] = useState<boolean>(false);
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
  const { Funnel, setStep } = useFunnel('결과');
  useEffect(() => {
    if (totalResults.length === quizzes?.length) {
      setStep('총결과');
      openModal();
    }
  }, [currentPage, totalResults]);
  useBeforeUnload({
    enabled: quizzes?.length !== totalResults.length,
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
            setResult(false);
            openModal();
          }}
        >
          SKIP
        </ResponseButton>
        <ResponseButton
          disabled={userResponseAnswer[0] === ''}
          $disabled={userResponseAnswer[0] === ''}
          onClick={() => {
            setResult(isEqualArray(userResponseAnswer, answer));
            openModal();
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
              result={result}
              answer={answer}
              lastPage={quizzes.length - 1}
              closeModal={closeModal}
            />
          </Funnel.Step>
          <Funnel.Step name="로그인 유도">
            <GoToLogin isActive={totalResults.length === 2} />
          </Funnel.Step>
          <Funnel.Step name="총결과">
            <TotalResults
              isActive={totalResults.length === quizzes.length}
              onNext={setStep}
              quizzesLength={quizzes.length}
            />
          </Funnel.Step>
          <Funnel.Step name="파트 클리어">
            <PartClear />
          </Funnel.Step>
        </Funnel>
      </Modal>
    </AlignCenter>
  );
}
