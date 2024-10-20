import type Quiz from '../../../types/Quiz';
import type ClientquizStoreTypes from '../../../types/ClientquizStoreTypes';
interface TotalResultsProps {
  quizzes: Quiz[];
  totalResults: ClientquizStoreTypes['totalResults'];
}
export default function TotalResults({
  quizzes,
  totalResults,
}: TotalResultsProps) {
  return (
    <div>
      <ul>
        <li>총 문제 수 : {quizzes.length}</li>
        <li>맞은 문제 수 : {totalResults.filter(result => result).length}</li>
      </ul>
    </div>
  );
}
