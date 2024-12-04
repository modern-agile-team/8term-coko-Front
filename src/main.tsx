import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';

import App from './App.tsx';
createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
);
