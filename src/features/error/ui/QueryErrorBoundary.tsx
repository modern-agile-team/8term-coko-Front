import Fallback from '@/features/error/ui/Fallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

interface QueryErrorBoundaryProps {
  children: React.ReactNode;
}

export default function QueryErrorBoundary({
  children,
}: QueryErrorBoundaryProps) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary onReset={reset} fallbackRender={Fallback}>
      {children}
    </ErrorBoundary>
  );
}
