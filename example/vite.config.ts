import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import esbuildPost from '../dist/index';

export default (): UserConfigExport => {
  return {
    build: {
      assetsInlineLimit: 0,
    },
    plugins: [
      vue(),
      jsx(),
      esbuildPost()
    ],
  };
};
