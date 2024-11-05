import Quiz from '../../../types/Quiz';
import { MultipleChoiceQuestionButton, ResponseBoxSection } from '../styles';
import { useClientQuizStore } from '../../../store/useClientQuizStore';
interface MultipleChoiceProps {
  answerChoice: Quiz['answerChoice'];
}
export default function MultipleChoice({ answerChoice }: MultipleChoiceProps) {
  const { userResponseAnswer, setUserResponseAnswer } = useClientQuizStore();
  return (
    <>
      <ResponseBoxSection $gapColumn="20px" $gridColumn="2/5">
        {answerChoice.map((value, index) => (
          <MultipleChoiceQuestionButton
            key={index}
            onClick={() => setUserResponseAnswer(value)}
            $backGroundColor={userResponseAnswer[0] === value}
          >
            {index + 1} : {value}
          </MultipleChoiceQuestionButton>
        ))}
      </ResponseBoxSection>
    </>
  );
}
