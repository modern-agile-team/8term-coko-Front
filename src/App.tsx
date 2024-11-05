import Router from './route/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { media } from './style/media';
import GlobalStyle from './style/GlobalStyle';
import GlobalFont from './style/GlobalFont';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: Infinity,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={media}>
          <GlobalStyle />
          <GlobalFont />
          <Router />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
