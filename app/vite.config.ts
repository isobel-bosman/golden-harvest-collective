import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginCommonJS from 'vite-plugin-commonjs';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    react(),
    viteTsconfigPaths(),
    // eslint(),
    vitePluginCommonJS(),
  ],
  server: {
    // this ensures that the browser opens upon server start
    open: false,
    host: 'localhost',
    // this sets a default port to 3000
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
});
