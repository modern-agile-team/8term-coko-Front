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
import Fallback from '@/common/layout/Fallback';
import LoadingIndicator from '@/common/layout/LoadingIndicator';
import { AxiosError, isAxiosError } from 'axios';
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
      throwOnError: error => {
        const axiosError = error as AxiosError; // 타입 단언
        if (axiosError.response?.status && axiosError.response.status >= 500) {
          return true;
        }
        return false;
      },
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
