import useUserInitializer from '@hooks/useUserInitializer';
import GlobalStyle from '@style/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import QueryErrorBoundary from '@features/error/ui/QueryErrorBoundary';
import { Suspense } from 'react';
import Loader from '@common/layout/Loader';
import Router from '@/route/Router';
import SSEProvider from '@/common/layout/SSEProvider';

// 파일 체크용 주석
function App() {
  useUserInitializer();
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" />
      <QueryErrorBoundary>
        <Suspense fallback={<Loader />}>
          <SSEProvider>
            <Router />
          </SSEProvider>
        </Suspense>
      </QueryErrorBoundary>
    </>
  );
}

export default App;
