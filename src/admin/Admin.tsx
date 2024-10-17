import { useQuery } from '@tanstack/react-query';
import { AlignCenter, LayOut, StyleLink } from './style';
import api from '../apis/axios/instance';
import type Quiz from './types/Quiz';
export default function Admin() {
  const { data: quizzes } = useQuery({
    queryKey: ['quizzes', 'all'],
    queryFn: () => api.get('/quizzes'),
  });
  return (
    <AlignCenter>
      <LayOut>
        <StyleLink to="/admin/create-quiz">문제 생성</StyleLink>
        <ul>
          {quizzes?.data.map((quiz: Quiz) => (
            <li key={quiz.id}>
              섹션: {quiz.sectionId} 파트 : {quiz.part} 타이틀: {quiz.title}:
              {quiz.question}
            </li>
          ))}
        </ul>
      </LayOut>
    </AlignCenter>
  );
}
