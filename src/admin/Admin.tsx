import { AlignCenter, LayOut, StyleLink } from './style';
import Quiz from './types/Quiz';

export default function Admin() {
  const quizzes: Quiz[] = [
    //단답형
    {
      id: 1,
      part: 'Easy',
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
      part: 'Normal',
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
      part: 'Hard',
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
      part: 'VeryHard',
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
      <LayOut>
        <StyleLink to="/admin/create-quiz">문제 생성</StyleLink>
        <ul>
          {quizzes?.map(quiz => (
            <li key={quiz.id}>
              섹션: {quiz.sectionId}파트 : {quiz.part}타이틀: {quiz.title}{' '}
              문제ㅇㅇ:
              {quiz.question}
            </li>
          ))}
        </ul>
      </LayOut>
    </AlignCenter>
  );
}
