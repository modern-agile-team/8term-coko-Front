import Question from '../../features/quiz/ui/Question';
import { AlignCenter } from '../../style/LayOut';
import { GridContainer, HeaderSection, ProgressSection } from '../quiz/styles';
import type Quiz from '../../types/Quiz';
import { useClientQuizStore } from '../../store/useClientQuizStore';
import Combination from '../../features/quiz/ui/Combination';
import MultipleChoice from '../../features/quiz/ui/MultipleChoice';
import OXSelector from '../../features/quiz/ui/OXSelector';
import ShortAnswer from '../../features/quiz/ui/ShortAnswer';
import componentMapping from '../../utils/componentMap';
import useBeforeUnload from '../../hooks/useBeforeUnload';
import ResultModal from '../../features/quiz/ui/ResultModal';
import getParams from '../../utils/getParams';
import TotalResults from '../../features/quiz/ui/TotalResults';
import { useState } from 'react';
import arraysEqual from '../../utils/arraysEqual';
import { ResponseButton, SubmitSection } from '../../features/quiz/styles';
import QuizzesQuery from '../../queries/quizzesQuery';
import useMoadl from '../../hooks/useModal';

//퀴즈페이지
export default function Quiz() {
  const { currentPage, totalResults, userResponseAnswer } =
    useClientQuizStore();
  const [result, setResult] = useState<boolean>(false);
  const { Modal, closeModal, openModal, isShow } = useMoadl();
  //새로고침 시 WaringAlert가 뜨게해주는 훅
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
  //추후 loading 페이지로 교체
  if (isLoading) return <div>Loading</div>;
  //------------------------
  if (!quizzes) return <div>404</div>;
  //퀴즈가 끝났을때 결과페이지 리턴
  if (quizzes.length === totalResults.length) {
    return (
      <>
        <TotalResults quizzes={quizzes} totalResults={totalResults} />
      </>
    );
  }
  //-----------------------------
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
      <GridContainer>
        <HeaderSection>
          <div>로고</div>
          <div>돈-??-프사</div>
        </HeaderSection>
        <ProgressSection>진행도</ProgressSection>
        <>
          <Question title={title} question={question} category={category} />
          {getComponentMappingByChoiceType(category, { answerChoice, answer })}
          <SubmitSection>
            <ResponseButton
              onClick={() => {
                setResult(false);
                openModal();
              }}
            >
              스킵
            </ResponseButton>
            <ResponseButton
              disabled={userResponseAnswer[0] === ''}
              onClick={() => {
                setResult(arraysEqual<string>(userResponseAnswer, answer));
                openModal();
              }}
            >
              확인
            </ResponseButton>
          </SubmitSection>
          <Modal isShow={isShow}>
            <ResultModal quizId={id} result={result} closeModal={closeModal} />
          </Modal>
        </>
      </GridContainer>
    </AlignCenter>
  );
}
