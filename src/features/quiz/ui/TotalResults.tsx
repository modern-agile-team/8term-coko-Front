import { Link } from 'react-router-dom';
import type Quiz from '../../../types/Quiz';
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
      <div>
        <ul>
          <li>총 문제 수 : {quizzes.length}</li>
          <li>맞은 문제 수 : {totalResults.filter(result => result).length}</li>
          <li>맞은 퀴즈 아이디:</li>
          <div>기타 결과들..</div>
        </ul>
      </div>
      <Link to="/learn">learn페이지로 돌아가기</Link>
    </>
  );
}
