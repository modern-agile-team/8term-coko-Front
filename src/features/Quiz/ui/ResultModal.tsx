import { useClientQuizStore } from '../../../store/useQuizStore';
import { ScoreBackGroundDiv, ScoreSection } from '../styles';
interface ScoreProps {
  result: boolean;
  setIsResultModal: (parameter: boolean) => void;
}
export default function ResultModal({ result, setIsResultModal }: ScoreProps) {
  const { handleNextPage, resetUserResponseAnswer, pushTotalResults } =
    useClientQuizStore();

  return (
    <>
      <ScoreBackGroundDiv>
        <ScoreSection>
          {result ? '정답' : '오답'}
          <button
            onClick={() => {
              resetUserResponseAnswer();
              pushTotalResults(result);
              setIsResultModal(false);
              handleNextPage();
            }}
          >
            계속하기
          </button>
        </ScoreSection>
      </ScoreBackGroundDiv>
    </>
  );
}
