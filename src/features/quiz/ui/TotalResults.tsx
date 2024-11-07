import type Quiz from '../../../types/Quiz';
import { CharacterImg, DashLineHr, TotalResultSection } from '../styles';
interface TotalResultsProps {
  quizzes: Quiz[];
  totalResults: boolean[];
}
export default function TotalResults({
  quizzes,
  totalResults,
}: TotalResultsProps) {
  return (
    <>
      <TotalResultSection>
        <div>
          총 {totalResults.filter(result => result).length} 문제를 맞혔고 보상을
          얻었어!
        </div>

        <DashLineHr />
        <CharacterImg></CharacterImg>
        <CharacterImg></CharacterImg>

        <DashLineHr />
        <div>기타 결과들..</div>
      </TotalResultSection>
    </>
  );
}
