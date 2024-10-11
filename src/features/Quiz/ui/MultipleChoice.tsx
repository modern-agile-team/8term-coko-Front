import Quiz from '../../../types/Quiz';
import { MultipleChoiceQuestionButton, ResponseBoxSection } from '../styles';
export default function MultipleChoice({
  answerChoice,
}: Pick<Quiz, 'answerChoice'>) {
  return (
    <ResponseBoxSection $gapColumn="20px" $gridColumn="2/5">
      {answerChoice.map((value, index) => (
        <MultipleChoiceQuestionButton key={index}>
          {index + 1} : {value}
        </MultipleChoiceQuestionButton>
      ))}
    </ResponseBoxSection>
  );
}
