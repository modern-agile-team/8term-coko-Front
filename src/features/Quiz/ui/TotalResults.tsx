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
      <button
        type="button"
        onClick={() => {
          const isLogin = confirm('로그인 체크하는 로직 yes or no');
          if (isLogin) {
            alert('서버로 맞은문제 보내주기기');
          } else {
            confirm('로그인 안하면 저장안되는데 그냥 나갈꺼야?')
              ? alert('그냥 /learn페이지로 보내버리기')
              : alert('로그인 페이지로 이동하는데 지금상태를갖고있기');
          }
        }}
      >
        돌아가기
      </button>
    </>
  );
}
