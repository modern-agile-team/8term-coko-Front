import { useState } from 'react';
import Quiz from '../../../types/Quiz';
import { MultipleChoiceQuestionButton, ResponseBoxSection } from '../styles';
import Submit from './Submit';
export default function MultipleChoice({
  answerChoice,
}: Pick<Quiz, 'answerChoice'>) {
  const [clientChoice, setClientChoice] = useState<string>('');
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
      <Submit userSubmitAnswer={[clientChoice]}></Submit>
    </>
  );
}
