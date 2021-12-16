# vite-plugin-esbuild-post

**English** | [中文](./README.zh_CN.md)

## Install (yarn or npm or pnpm)

**node version:** >=12.0.0

**vite version:** >=2.0.0

```
yarn add vite-plugin-esbuild-post -D
```

or

```
npm i vite-plugin-esbuild-post -D
```

or

```
pnpm add vite-plugin-esbuild-post -D
```

## Usage

- Configuration plugin in vite.config.ts

```ts
import esbuildPost from 'vite-plugin-esbuild-post';

export default () => {
  return {
    plugins: [esbuildPost()],
  };
};
```

## Options

Same as `vite-plugin-esbuid`.


**DefaultOptions**


```
{
  target: 'chrome70',
  include: /\.vue$/,
  loaders: {
    '.vue': 'js',
  },
}
```

## Example

**Run Example**

```bash

cd ./example

yarn install

yarn test

```

## License

MIT
