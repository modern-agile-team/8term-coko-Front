import Router from './route/Router';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { media } from './style/media';
import GlobalStyle from './style/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import Loader from '@common/layout/Loader';
import QueryErrorBoundary from '@features/error/ui/QueryErrorBoundary';
import { Suspense } from 'react';
import { handleError } from '@features/error/service/errorUtils';
import { ErrorBoundary } from 'react-error-boundary';
import NotFound from '@/features/error/ui/NotFound';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleError,
  }),
  defaultOptions: {
    mutations: { networkMode: 'always' },
    queries: {
      staleTime: Infinity,
      gcTime: Infinity,
      networkMode: 'always',
      throwOnError: true,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={media}>
          <GlobalStyle />
          <Toaster position="top-right" />
          <QueryErrorBoundary>
            <Suspense fallback={<Loader />}>
              <ErrorBoundary FallbackComponent={NotFound}>
                <Router />
              </ErrorBoundary>
            </Suspense>
          </QueryErrorBoundary>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
