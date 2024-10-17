import { useClientQuizStore } from '../../../store/useQuizStore';
import { ScoreBackGroundDiv, ScoreSection } from '../styles';
interface ScoreProps {
  result: boolean;
}
export default function Result({ result }: ScoreProps) {
  const { handleNextPage, resetUserResponseAnswer, setTotalResults } =
    useClientQuizStore();
  return (
    <ScoreBackGroundDiv>
      <ScoreSection>
        {result ? '정답' : '오답'}
        <button
          onClick={() => {
            resetUserResponseAnswer();
            setTotalResults(result);
            handleNextPage();
          }}
        >
          계속하기
        </button>
      </ScoreSection>
    </ScoreBackGroundDiv>
  );
}
