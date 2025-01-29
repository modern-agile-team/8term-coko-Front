import { Link } from 'react-router-dom';

interface NotFoundProps {
  error?: Error;
}

export default function NotFound({ error }: NotFoundProps) {
  return (
    <div>
      <h1>404</h1>
      <p>{error?.message}</p>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/learn">홈으로 돌아가기</Link>
    </div>
  );
}
