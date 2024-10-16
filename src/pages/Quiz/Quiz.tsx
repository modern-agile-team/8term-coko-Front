import Question from '../../features/Quiz/ui/Question';
import { AlignCenter } from '../../style/LayOut';
import { GridContainer, HeaderSection, ProgressSection } from './styles';
import type Quiz from '../../types/Quiz';
import { useClientQuizStore } from '../../store/useQuizStore';
import Combination from '../../features/Quiz/ui/Combination';
import MultipleChoice from '../../features/Quiz/ui/MultipleChoice';
import OXSelector from '../../features/Quiz/ui/OXSelector';
import ShortAnswer from '../../features/Quiz/ui/ShortAnswer';
import componentMapping from '../../utils/componentMap';
import useRefreshWaringAlert from '../../hooks/useRefreshWaringAlert';
import Score from '../../features/Quiz/ui/Score';
import arraysEqual from '../../utils/arraysEqual';
//퀴즈페이지
export default function Quiz() {
  // const { section, part } = useParams();
  const { currentPage, reset, userResponseAnswer } = useClientQuizStore();
  useRefreshWaringAlert();
  const quizzes: Quiz[] = [
    //예시 1섹션 1파트에 문제 4개
    //단답형
    {
      id: 1,
      partId: 1,
      sectionId: 1,
      title: '실행결과를 쓰시오',
      question: 'console.log(1 + 2)',
      answer: ['3'],
      category: 'ShortAnswer',
      answerChoice: [''],
    },
    //객관식
    {
      id: 2,
      partId: 1,
      sectionId: 1,
      title: '실행결과를 쓰시오',
      question: 'console.log(1 + 2)',
      answer: ['3'],
      category: 'MultipleChoice',
      answerChoice: ['1', '4', '3', '7'],
    },
    //ox유형
    {
      id: 3,
      partId: 1,
      sectionId: 1,
      title: 'OX문제',
      question: '1 은 number타입이다;',
      answer: ['O'],
      category: 'OXSelector',
      answerChoice: [''],
    },
    //조합형
    {
      id: 4,
      partId: 1,
      sectionId: 1,
      title: '빈칸을 채우시오',
      question: '#empty#.log(#empty#)',
      answer: ['console', '1+3'],
      category: 'Combination',
      answerChoice: ['console', '1+3', 'function', '어쩌구저쩌구', '두두두두'],
    },
  ];
  if (quizzes.length <= currentPage) {
    return (
      <button onClick={() => reset()}>
        퀴즈 다 풀었을때 페이지 바로 결과페이지나 그런곳으로 상태를
        넘겨야할거같은데요 어떻게할까요?
      </button>
    );
  }

  const { title, question, category, answerChoice, answer } =
    quizzes[currentPage];

  const { ComponentChoice } = componentMapping<Pick<Quiz, 'answerChoice'>>({
    Combination,
    MultipleChoice,
    OXSelector,
    ShortAnswer,
  });
  return (
    <AlignCenter>
      <GridContainer>
        <HeaderSection>
          <div>로고</div>
          <div>돈-??-프사 </div>
        </HeaderSection>
        <Score
          result={
            userResponseAnswer ? arraysEqual(answer, userResponseAnswer) : null
          }
        ></Score>
        <ProgressSection>진행도</ProgressSection>
        <Question
          title={title}
          question={question}
          category={category}
          answerChoice={answerChoice}
        />
        {ComponentChoice(category, { answerChoice })}
      </GridContainer>
    </AlignCenter>
  );
}
