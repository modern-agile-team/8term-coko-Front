import { isAxiosError } from 'axios';
import { FallbackWrapper } from './styles';
import { FallbackProps } from 'react-error-boundary';
import { getErrorMessage } from '@features/error/service/errorUtils';

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  if (!isAxiosError(error)) {
    return <></>;
  }
  // 스테이터스 코드가 있을 때
  if (error.status) {
    return (
      <FallbackWrapper>
        <p>{getErrorMessage(error.status)}</p>
        <p>재시도 해주세요.</p>
        <button onClick={resetErrorBoundary}>재시도</button>
      </FallbackWrapper>
    );
  }

  if (error.code && error.code === 'ERR_NETWORK') {
    return (
      <FallbackWrapper>
        <p>네트워크 에러가 발생했습니다.</p>
        <p>재시도 해주세요.</p>
        <button onClick={resetErrorBoundary}>재시도</button>
      </FallbackWrapper>
    );
  }
}
