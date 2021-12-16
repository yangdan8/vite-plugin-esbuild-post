# vite-plugin-esbuild-post

**中文** | [English](./README.md)

## 安装 (yarn or npm or pnpm)

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

## 使用

- vite.config.ts 中的配置插件

```ts
import esbuildPost from 'vite-plugin-esbuild-post';

export default () => {
  return {
    plugins: [esbuildPost()],
  };
};
```

### 配置说明

与原`vite-plugin-esbuid`相同。

**默认参数值**

```
{
  target: 'chrome70',
  include: /\.vue$/,
  loaders: {
    '.vue': 'js',
  },
}
```

## 示例

**运行示例**

```bash

cd ./example

yarn install

yarn test

```

## License

MIT
