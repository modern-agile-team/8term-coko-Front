import { useEffect, useState } from 'react';
import Quiz from '../../../types/Quiz';
import { MultipleChoiceQuestionButton, ResponseBoxSection } from '../styles';
import Submit from './Submit';
import { useClientQuizStore } from '../../../store/useQuizStore';
export default function MultipleChoice({
  answerChoice,
}: Pick<Quiz, 'answerChoice'>) {
  const [clientChoice, setClientChoice] = useState<string | null>(null);
  const { userResponseAnswer } = useClientQuizStore();
  useEffect(() => {
    setClientChoice(null);
  }, [userResponseAnswer]);
  return (
    <>
      <ResponseBoxSection $gapColumn="20px" $gridColumn="2/5">
        {answerChoice.map((value, index) => (
          <MultipleChoiceQuestionButton
            key={index}
            onClick={() => setClientChoice(value)}
            $backGroundColor={clientChoice === value}
          >
            {index + 1} : {value}
          </MultipleChoiceQuestionButton>
        ))}
      </ResponseBoxSection>
      <Submit userSubmitAnswer={clientChoice ? [clientChoice] : null} />
    </>
  );
}
