import { useParams } from 'react-router-dom';
import Question from '../../features/Quiz/ui/Question';
import ResponseBox from '../../features/Quiz/ui/ResponseBox';
import { AlignCenter } from '../../style/LayOut';
import {
  GridContainer,
  HeaderSection,
  ProgressSection,
  FooterSection,
} from './styles';
import type Quiz from '../../types/Quiz';
import SkipButton from '../../features/Quiz/ui/SkipButton';
import ConfirmButton from '../../features/Quiz/ui/ConfirmButton';
//퀴즈페이지
export default function Quiz() {
  const { section, part } = useParams();
  console.log(section, part);
  //대충 가져온 문제들
  const quiz: Quiz[] = [
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
      question: '1 은 number타입이다?',
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
      question: '[    ].log([    ])',
      answer: ['3'],
      category: 'Combination',
      answerChoice: ['console', '1+2', 'function', '어쩌구저쩌구', '두두두두'],
    },
  ];

  return (
    <AlignCenter>
      <GridContainer>
        <HeaderSection>
          <div>로고</div>
          <div>돈-??-프사 </div>
        </HeaderSection>
        <ProgressSection>진행도</ProgressSection>
        <Question title={quiz[3].title} question={quiz[3].question}></Question>
        <ResponseBox category={quiz[3].category}></ResponseBox>
        <FooterSection>
          <SkipButton />
          <ConfirmButton />
        </FooterSection>
      </GridContainer>
    </AlignCenter>
  );
}
