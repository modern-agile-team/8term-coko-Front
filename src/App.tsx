import Router from './route/Router';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { media } from './style/media';
import GlobalStyle from './style/GlobalStyle';
import { ErrorBoundary } from 'react-error-boundary';
import toast, { Toaster } from 'react-hot-toast';
import Fallback from '@/features/error/ui/Fallback';
import LoadingIndicator from '@/common/layout/LoadingIndicator';
import { throwOnError } from '@/features/error/service/errorUtils';
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`백그라운드 데이터 가져오기 실패: ${error.message}`);
      }
    },
  }),
  defaultOptions: {
    mutations: { networkMode: 'always' },
    queries: {
      staleTime: Infinity,
      gcTime: Infinity,
      networkMode: 'always',
      throwOnError,
    },
  },
});
function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={media}>
          <GlobalStyle />
          <Toaster position="top-right" />
          <LoadingIndicator />
          <ErrorBoundary onReset={reset} FallbackComponent={Fallback}>
            <Router />
          </ErrorBoundary>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
