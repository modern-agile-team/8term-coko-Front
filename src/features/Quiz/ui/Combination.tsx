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
                  //답 수랑 내가 선택한 답 (공백빼고) 갯수 비교 정답보다 선택한게 많으면 안되니
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
