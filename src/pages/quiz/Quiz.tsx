import Question from '../../features/quiz/ui/Question';
import { AlignCenter } from '../../style/LayOut';
import {
  HeaderSection,
  ProgressSection,
  ResponseButton,
  SubmitSection,
} from './styles';
import type Quiz from '../../types/Quiz';
import { useClientQuizStore } from '../../store/useClientQuizStore';
import Combination from '../../features/quiz/ui/Combination';
import MultipleChoice from '../../features/quiz/ui/MultipleChoice';
import OXSelector from '../../features/quiz/ui/OXSelector';
import ShortAnswer from '../../features/quiz/ui/ShortAnswer';
import componentMapping from '../../utils/componentMap';
import useBeforeUnload from '../../hooks/useBeforeUnload';
import ResultModal from '../../features/quiz/ui/Result';
import getParams from '../../utils/getParams';
import TotalResults from '../../features/quiz/ui/TotalResults';
import { useState } from 'react';
import isEqualArray from '../../utils/isEqualArray';
import QuizzesQuery from '../../queries/quizzesQuery';
import useModal from '../../hooks/useModal';
import usePreloadImages from '../../hooks/usePreloadImages';

//퀴즈페이지
export default function Quiz() {
  const baseURL = import.meta.env.VITE_IMG_BASE_URL;

  const { currentPage, totalResults, userResponseAnswer } =
    useClientQuizStore();
  const [result, setResult] = useState<boolean>(false);
  const { Modal, closeModal, openModal, isShow } = useModal();
  //페이지 이탈시 경고창이 뜨는 훅
  useBeforeUnload();
  //추후에 url에서 추출이 아닌 내부적으로 props로 전달하는 로직으로 변경 예정
  const [partId] = getParams(['part-id']);
  if (partId === null) {
    return <div>404</div>;
  }
  //------------------------------------------
  const { data: quizzes, isLoading } = QuizzesQuery.get({
    partId: Number(partId),
  });
  const isImageLoading = usePreloadImages({
    baseURL,
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
  //추후 loading 페이지로 교체
  if (isLoading && isImageLoading) return <div>Loading</div>;
  //------------------------
  if (!quizzes) return <div>404</div>;

  const { id, title, question, category, answerChoice, answer } =
    quizzes[currentPage];
  //
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
        <div>로고</div>
        <div>돈-??-프사</div>
      </HeaderSection>
      <ProgressSection>진행도</ProgressSection>

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
        {quizzes.length === totalResults.length ? (
          <TotalResults quizzes={quizzes} totalResults={totalResults} />
        ) : (
          <ResultModal
            quizId={id}
            result={result}
            answer={answer}
            lastPage={quizzes.length - 1}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
      </Modal>
    </AlignCenter>
  );
}
