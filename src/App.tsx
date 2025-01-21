import useUserInitializer from '@hooks/useUserInitializer';
import GlobalStyle from '@style/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import QueryErrorBoundary from '@features/error/ui/QueryErrorBoundary';
import { Suspense } from 'react';
import Loader from '@common/layout/Loader';
import Router from '@/route/Router';
import { ErrorBoundary } from 'react-error-boundary';
import NotFound from '@/features/error/ui/NotFound';

function App() {
  useUserInitializer();
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" />
      <QueryErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </QueryErrorBoundary>
    </>
  );
}

export default App;
