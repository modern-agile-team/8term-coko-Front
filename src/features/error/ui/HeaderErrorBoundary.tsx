import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface QueryErrorBoundaryProps {
  children: React.ReactNode;
}

export default function HeaderErrorBoundary({
  children,
}: QueryErrorBoundaryProps) {
  return (
    <Suspense fallback={<></>}>
      <ErrorBoundary fallback={<></>}>{children}</ErrorBoundary>
    </Suspense>
  );
}
