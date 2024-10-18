import Quiz from '../../../types/Quiz';
import { CombinationUl, TextBlockButton } from '../styles';
import { useClientQuizStore } from '../../../store/useQuizStore';

export default function Combination({
  answerChoice,
}: Pick<Quiz, 'answerChoice'>) {
  const { userResponseAnswer, pushUserResponseAnswer } = useClientQuizStore();
  return (
    <>
      <CombinationUl>
        {answerChoice.map((choice, index) => (
          <TextBlockButton
            key={index}
            onClick={() => pushUserResponseAnswer(choice)}
            $selected={userResponseAnswer.includes(choice)}
            disabled={userResponseAnswer.includes(choice)}
          >
            {choice}
          </TextBlockButton>
        ))}
      </CombinationUl>
    </>
  );
}
