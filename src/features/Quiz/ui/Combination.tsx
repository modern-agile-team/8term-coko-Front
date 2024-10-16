import Quiz from '../../../types/Quiz';
import { CombinationUl, TextBlockButton } from '../styles';
import Submit from './Submit';
import { useClientQuizStore } from '../../../store/useQuizStore';

export default function Combination({
  answerChoice,
}: Pick<Quiz, 'answerChoice'>) {
  const { userChoiceCombination, choiceListPush } = useClientQuizStore();
  const currentChoices = userChoiceCombination || [];
  return (
    <>
      <CombinationUl>
        {answerChoice.map((value, index) => (
          <TextBlockButton
            key={index}
            onClick={() => choiceListPush(value)}
            $selected={currentChoices.includes(value)}
            disabled={userChoiceCombination?.includes(value)}
          >
            {value}
          </TextBlockButton>
        ))}
      </CombinationUl>
      <Submit userSubmitAnswer={userChoiceCombination} />
    </>
  );
}
