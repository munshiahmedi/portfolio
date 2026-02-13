import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024, // Only files larger than 1kb will be compressed
    }),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    minify: 'esbuild',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          vendor: ['framer-motion'],
          icons: ['react-icons'],
        },
      },
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  preview: {
    port: 3000,
  },
});
