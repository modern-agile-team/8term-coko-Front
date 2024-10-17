import Question from '../../features/Quiz/ui/Question';
import { AlignCenter } from '../../style/LayOut';
import {
  GridContainer,
  HeaderSection,
  ProgressSection,
  TotalResultsSection,
} from './styles';
import type Quiz from '../../types/Quiz';
import { useClientQuizStore } from '../../store/useQuizStore';
import Combination from '../../features/Quiz/ui/Combination';
import MultipleChoice from '../../features/Quiz/ui/MultipleChoice';
import OXSelector from '../../features/Quiz/ui/OXSelector';
import ShortAnswer from '../../features/Quiz/ui/ShortAnswer';
import componentMapping from '../../utils/componentMap';
import useRefreshWaringAlert from '../../hooks/useRefreshWaringAlert';
import arraysEqual from '../../utils/arraysEqual';
import QUIZ from '../../apis/quiz';
import Result from '../../features/Quiz/ui/result';
import useQueryParams from '../../hooks/useQueryParams';
import TotalResults from '../../features/Quiz/ui/TotalResults';
//퀴즈페이지
export default function Quiz() {
  const { currentPage, userResponseAnswer, totalResults } =
    useClientQuizStore();
  const [section, part] = useQueryParams(['section-id', 'part']);
  useRefreshWaringAlert();
  const { data: quizzes, isLoading } = QUIZ.getQuizzes(section, part);
  if (!quizzes) return <div>404</div>;
  if (isLoading) return <div>Loading</div>;
  if (quizzes.length === totalResults.length) {
    return (
      <>
        <AlignCenter>
          <GridContainer>
            <HeaderSection>
              <div>로고</div>
              <div>돈-??-프사 </div>
            </HeaderSection>
            <ProgressSection>진행도</ProgressSection>
            <TotalResultsSection>
              <TotalResults quizzes={quizzes} totalResults={totalResults} />
            </TotalResultsSection>
            <button>돌아가기</button>
          </GridContainer>
        </AlignCenter>
      </>
    );
  }
  const { title, question, category, answerChoice, answer } =
    quizzes[currentPage];
  const { ComponentChoice } = componentMapping<Pick<Quiz, 'answerChoice'>>({
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
          <div>돈-??-프사 </div>
        </HeaderSection>

        <ProgressSection>진행도</ProgressSection>
        <Question
          title={title}
          question={question}
          category={category}
          answerChoice={answerChoice}
        />
        {ComponentChoice(category, { answerChoice })}
        {userResponseAnswer && (
          <Result result={arraysEqual(answer, userResponseAnswer)} />
        )}
      </GridContainer>
    </AlignCenter>
  );
}
