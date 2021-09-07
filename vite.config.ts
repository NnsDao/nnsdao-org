import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import ViteRsw from 'vite-plugin-rsw';

export default defineConfig({
  plugins: [
    reactRefresh(),
    ViteRsw({
      crates: [
        'wasm-test',
      ]
    }),
  ],
  build: {
    outDir: "/usr/local/share/project/docker-compose/nginx/html/nnsdao"
  }
})
