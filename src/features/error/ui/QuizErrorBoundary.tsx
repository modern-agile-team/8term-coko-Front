import NotFound from '@/features/error/ui/NotFound';
import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export default function QuizErrorBoundary({ children }: PropsWithChildren) {
  return <ErrorBoundary FallbackComponent={NotFound}>{children}</ErrorBoundary>;
}
