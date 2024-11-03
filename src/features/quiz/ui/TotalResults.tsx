import type Quiz from '../../../types/Quiz';
import type ClientQuizStoreTypes from '../../../types/ClientQuizStoreTypes';
interface TotalResultsProps {
  quizzes: Quiz[];
  totalResults: ClientQuizStoreTypes['totalResults'];
}
export default function TotalResults({
  quizzes,
  totalResults,
}: TotalResultsProps) {
  return (
    <>
      <div>
        <ul>
          <li>총 문제 수 : {quizzes.length}</li>
          <li>맞은 문제 수 : {totalResults.filter(result => result).length}</li>
          <li>
            맞은 문제 id들 : {totalResults.filter(result => result).length}
          </li>
        </ul>
      </div>
      <button type="button">돌아가기</button>
    </>
  );
}
