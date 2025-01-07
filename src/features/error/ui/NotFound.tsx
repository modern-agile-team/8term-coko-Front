import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/learn">홈으로 돌아가기</Link>
    </div>
  );
}
