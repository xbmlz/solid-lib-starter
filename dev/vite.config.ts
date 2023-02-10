import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin(),
    {
      name: 'Reaplace env variables',
      transform(code, id) {
        if (id.includes('node_modules')) {
          return code
        }
        return code
          .replaceAll('process.env.SSR', 'false')
          .replaceAll('process.env.DEV', 'true')
          .replaceAll('process.env.PROD', 'false')
          .replaceAll('process.env.NODE_ENV', '"development"')
          .replaceAll('import.meta.env.SSR', 'false')
          .replaceAll('import.meta.env.DEV', 'true')
          .replaceAll('import.meta.env.PROD', 'false')
          .replaceAll('import.meta.env.NODE_ENV', '"development"')
      },
    },
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
