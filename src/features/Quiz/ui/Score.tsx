import { useEffect, useState } from 'react';
import { useClientQuizStore } from '../../../store/useQuizStore';
import arraysEqual from '../../../utils/arraysEqual';
import { ScoreBackGroundDiv, ScoreSection } from '../styles';
interface ScoreProps {
  result: boolean | null;
}
export default function Score({ result }: ScoreProps) {
  const { handleNextPage, resetUserResponseAnswer } = useClientQuizStore();
  if (result === null) {
    return <></>;
  }
  return (
    <ScoreBackGroundDiv>
      <ScoreSection>
        {result ? '정답' : '오답'}
        <button
          onClick={() => {
            resetUserResponseAnswer();
            handleNextPage();
          }}
        >
          계속하기
        </button>
      </ScoreSection>
    </ScoreBackGroundDiv>
  );
}
