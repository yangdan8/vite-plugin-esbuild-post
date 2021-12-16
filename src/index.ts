import esbuild, { Options } from 'rollup-plugin-esbuild';
import { Plugin } from 'vite';

export default function esbuildPost(options: Options = {}): Plugin {
  const emptyPlugin = {
    name: 'yangdan8:esbuild-post',
  };

  const optionsNew = {
    target: 'chrome70',
    include: /\.vue$/,
    loaders: {
      '.vue': 'js',
    },
    ...options,
  } as Options;

  const result = {
    ...esbuild(optionsNew),
    ...emptyPlugin,
    enforce: 'post',
  } as Plugin;

  return result;
}
