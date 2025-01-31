import { isAxiosError } from 'axios';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { PropsWithChildren } from 'react';

export default function HeaderErrorBoundary({ children }: PropsWithChildren) {
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
      <Suspense fallback={<></>}>{children}</Suspense>
    </ErrorBoundary>
  );
}
