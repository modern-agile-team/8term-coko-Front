import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    react({
      plugins: [
        [
          '@swc/plugin-styled-components',
          {
            displayName: true,
            ssr: false,
          },
        ],
      ],
    }),
    mkcert(),
  ],
  cacheDir: 'vite_cache',
});
