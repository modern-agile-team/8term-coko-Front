import * as S from './styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import './styles.css';
import Quiz from '../../../types/Quiz';
import 'highlight.js/styles/base16/atelier-cave-light.css';
import useCodeHighlight from '@/features/quiz/service/useCodeHighlight';
import emptyChangeToDiv from '@/features/quiz/service/emptyChangeToDiv';
import dompurify from 'dompurify';
import parse from 'html-react-parser';

interface QuestionProps {
  title: Quiz['title'];
  question: Quiz['question'];
  category: Quiz['category'];
}
export default function Question({ title, question, category }: QuestionProps) {
  const { currentPage } = useClientQuizStore();
  const code = useCodeHighlight(question, [question]);
  return (
    <S.QuestionSection $category={category}>
      <S.Title $category={category}>
        <p>문제{currentPage + 1}.</p>
        <p>{title}</p>
      </S.Title>
      <S.Pre>
        <S.Code className="language-javascript">
          {parse(dompurify.sanitize(code))}
        </S.Code>
      </S.Pre>
    </S.QuestionSection>
  );
}
