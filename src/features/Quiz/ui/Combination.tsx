import Quiz from '../../../types/Quiz';
import { CombinationUl, TextBlockLi } from '../styles';

export default function Combination({
  answerChoice,
}: Pick<Quiz, 'answerChoice'>) {
  return (
    <CombinationUl>
      {answerChoice.map(value => (
        <TextBlockLi>{value}</TextBlockLi>
      ))}
    </CombinationUl>
  );
}
