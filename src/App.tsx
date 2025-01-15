import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { handleError } from '@features/error/service/errorUtils';
import GlobalStyle from '@/style/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import QueryErrorBoundary from '@features/error/ui/QueryErrorBoundary';
import { Suspense } from 'react';
import Loader from '@common/layout/Loader';
import UserInitializer from '@features/auth/ui/UserInitializer';
import Router from '@/route/Router';

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
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Toaster position="top-right" />
      <QueryErrorBoundary>
        <Suspense fallback={<Loader />}>
          <UserInitializer />
          <Router />
        </Suspense>
      </QueryErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
