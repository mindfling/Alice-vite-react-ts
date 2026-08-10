// src/global.d.ts

declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '@a1rth/css-normalize';
