import Question from '../../features/quiz/ui/Question';
import { AlignCenter } from '../../style/LayOut';
import { GridContainer, HeaderSection, ProgressSection } from '../quiz/styles';
import type Quiz from '../../types/Quiz';
import { useClientQuizStore } from '../../store/useQuizStore';
import Combination from '../../features/quiz/ui/Combination';
import MultipleChoice from '../../features/quiz/ui/MultipleChoice';
import OXSelector from '../../features/quiz/ui/OXSelector';
import ShortAnswer from '../../features/quiz/ui/ShortAnswer';
import componentMapping from '../../utils/componentMap';
import useRefreshWaringAlert from '../../hooks/useRefreshWaringAlert';
import ResultModal from '../../features/quiz/ui/ResultModal';
import useQueryParams from '../../hooks/useQueryParams';
import TotalResults from '../../features/quiz/ui/TotalResults';
import { useState } from 'react';
import arraysEqual from '../../utils/arraysEqual';
import { ResponseButton, SubmitSection } from '../../features/quiz/styles';
import QuizzesApi from './../../apis/quizzes';
//퀴즈페이지
export default function Quiz() {
  //-----임시 유저 세팅-----
  const user = { id: 1, name: 'Hi' };
  localStorage.setItem('user', JSON.stringify(user));
  //-----임시 유저 세팅----
  const { currentPage, totalResults, userResponseAnswer } =
    useClientQuizStore();
  const [section, partId] = useQueryParams(['section-id', 'part-id']);
  const [result, setResult] = useState<boolean>(false);
  const [isResultModal, setIsResultModal] = useState<boolean>(false);
  useRefreshWaringAlert();
  if (section === null || partId === null) {
    return <div>404</div>;
  }
  const { data: quizzes, isLoading } = QuizzesApi.get(
    Number(section),
    Number(partId)
  );
  if (isLoading) return <div>Loading</div>;
  if (!quizzes) return <div>404</div>;
  if (quizzes.length === totalResults.length) {
    return (
      <>
        <TotalResults quizzes={quizzes} totalResults={totalResults} />
      </>
    );
  }
  const { id, title, question, category, answerChoice, answer } =
    quizzes[currentPage];
  const componentChoice = componentMapping<
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
          {componentChoice(category, { answerChoice, answer })}
          <SubmitSection>
            <ResponseButton
              onClick={() => {
                setResult(false);
                setIsResultModal(true);
              }}
            >
              스킵
            </ResponseButton>
            <ResponseButton
              disabled={userResponseAnswer[0] === ''}
              onClick={() => {
                setResult(arraysEqual<string>(userResponseAnswer, answer));
                setIsResultModal(true);
              }}
            >
              확인
            </ResponseButton>
          </SubmitSection>
          {isResultModal && (
            <ResultModal
              quizId={id}
              result={result}
              setIsResultModal={setIsResultModal}
            />
          )}
        </>
      </GridContainer>
    </AlignCenter>
  );
}
