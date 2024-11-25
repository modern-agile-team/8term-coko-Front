import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
  },

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
  ],
});
