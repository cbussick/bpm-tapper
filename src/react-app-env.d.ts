/// <reference types="react-scripts" />

// Avoid ts-errors when importing .wav-files
declare module "*.wav" {
  const src: string;
  export default src;
}
