import { isAxiosError } from 'axios';
import { FallbackWrapper } from './styles';
import { FallbackProps } from 'react-error-boundary';
import { getErrorMessage } from '@features/error/service/errorUtils';

export default function ItemFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  console.error(error);
  if (!isAxiosError(error)) {
    return (
      <>
        <h1>실행 중 에러 발생!</h1>
        <button onClick={resetErrorBoundary}>재시도</button>
      </>
    );
  }
}
