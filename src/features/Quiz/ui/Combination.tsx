import Quiz from '../../../types/Quiz';
import { CombinationUl, TextBlockButton } from '../styles';
import { useClientQuizStore } from '../../../store/useQuizStore';
interface CombinationProps {
  answerChoice: Quiz['answerChoice'];
  answer: Quiz['answer'];
}
export default function Combination({
  answerChoice,
  answer,
}: CombinationProps) {
  const { userResponseAnswer, pushUserResponseAnswer } = useClientQuizStore();

  return (
    <>
      <CombinationUl>
        {answerChoice.map((choice, index) => {
          const isSelect = userResponseAnswer.includes(choice);
          return (
            <TextBlockButton
              key={index}
              onClick={() => {
                if (
                  answer.length > userResponseAnswer.filter(item => item).length
                ) {
                  pushUserResponseAnswer(choice);
                }
              }}
              $selected={isSelect}
              disabled={isSelect}
            >
              {choice}
            </TextBlockButton>
          );
        })}
      </CombinationUl>
    </>
  );
}
