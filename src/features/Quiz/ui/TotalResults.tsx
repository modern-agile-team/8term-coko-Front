import Quiz from '../../../types/Quiz';

interface TotalResultsProps {
  quizzes: Quiz[];
  totalResults: boolean[];
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
