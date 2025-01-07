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
import { onError } from '@features/error/service/errorUtils';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError,
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
              <Router />
            </Suspense>
          </QueryErrorBoundary>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
