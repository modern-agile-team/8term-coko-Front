import { isAxiosError } from 'axios';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface QueryErrorBoundaryProps {
  children: React.ReactNode;
}

export default function HeaderErrorBoundary({
  children,
}: QueryErrorBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={<></>}
      onError={error => {
        if (isAxiosError(error) && error.response?.status === 401) {
          return;
        }
        throw error;
      }}
    >
      <Suspense fallback={<></>}>{children} </Suspense>
    </ErrorBoundary>
  );
}
