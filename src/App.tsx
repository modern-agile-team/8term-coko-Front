import Router from './route/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { media } from './style/media';
import GlobalStyle from './style/GlobalStyle';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: Infinity,
      },
    },
  });

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get('https://api.cokoedu.com/auth/verify');
        console.log('Verification successful:', response.data);
      } catch (error) {
        console.error('Verification failed:', error);
      }
    };

    verifyAuth();
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={media}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
