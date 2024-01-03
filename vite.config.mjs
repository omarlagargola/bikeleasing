import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const ASSET_URL = process.env.ASSET_URL || '';

export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, './src') },
      ],
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(__dirname, './src/assets') + '/[!.]*',
            dest: './src/assets',
          },
          {
            src: path.resolve(__dirname, './src/mocks') + '/[!.]*',
            dest: './src/mocks',
          },
        ],
      }),
    ],
    base: `${ASSET_URL}/dist`,
    server: {
      port: 8080,
      open: './dist/src/index.html',
    },
    build: {
      emptyOutDir: false,
      cssCodeSplit: false,
      lib: {
        name: 'bikeleasing-challenge',
        entry: resolve(__dirname, 'src/index.html'),
      },
      commonjsOptions: {
        include: [/node_modules/],
      },
      server: {
        port: 3001,
        open: './src/index.html',
      },
      outDir: './dist',
    },
  };
});
