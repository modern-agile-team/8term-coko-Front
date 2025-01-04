import { FallbackWrapper } from '@/common/layout/style';
import { FallbackProps } from 'react-error-boundary';

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <FallbackWrapper>
      <p>{error.toString()}</p>
      <p>오류가 발생했습니다.</p>
      <p>재시도 해주세요.</p>
      <button onClick={resetErrorBoundary}>재시도</button>
    </FallbackWrapper>
  );
}
