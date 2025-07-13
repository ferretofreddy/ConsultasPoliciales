import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/schema.ts'],
  format: ['esm'],
  // Le decimos a tsup que NO genere los archivos .d.ts.
  // El compilador 'tsc' se encargará de esto de forma más confiable.
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  outExtension() {
    return {
      js: `.js`,
    };
  },
});