import { useParams } from 'react-router-dom';
import Question from '../../features/Quiz/ui/Question';
import ResponseBox from '../../features/Quiz/ui/ResponseBox';
import { AlignCenter } from '../../style/LayOut';
import { GridContainer, HeaderSection, ProgressSection } from './styles';

export default function Quiz() {
  //무슨 섹션의 n번 파트로 요청
  const { section, part } = useParams();
  console.log(section, part);
  //대충 가져온 문제들
  const quiz = [
    {
      id: 1,
      partId: 1,
      sectionId: 1,
      title: '실행결과를 쓰시오',
      question: 'console.log(1 + 2)',
      answer: 3,
      category: 'ShortAnswer',
      answerChoice: '',
    },
  ];
  return (
    <GridContainer>
      <HeaderSection>
        <div>로고</div>
        <div>돈-??-프사 </div>
      </HeaderSection>
      <ProgressSection>진행도</ProgressSection>
      <Question title={quiz[0].title} question={quiz[0].question}></Question>
      <ResponseBox></ResponseBox>
    </GridContainer>
  );
}
