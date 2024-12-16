import Quiz from '../../../types/Quiz';
import { CombinationSection, TextBlockButton } from './styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
import compact from '../../../utils/compact';
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
      <CombinationSection>
        {answerChoice.map(value => {
          const isSelect = userResponseAnswer.includes(value);
          return (
            <TextBlockButton
              key={value}
              onClick={() => {
                //답 수랑 내가 선택한 답 (공백빼고) 갯수 비교 정답보다 선택한게 많으면 안되니
                answer.length > compact(userResponseAnswer).length &&
                  pushUserResponseAnswer(value);
              }}
              $selected={isSelect}
              disabled={isSelect}
            >
              {value}
            </TextBlockButton>
          );
        })}
      </CombinationSection>
    </>
  );
}
