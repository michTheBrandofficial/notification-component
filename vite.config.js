
    import { defineConfig } from "vite";
    import viteJsconfigPaths from 'vite-jsconfig-paths';
    import svgrPlugin from "vite-plugin-svgr";
    import path from 'path';

    function resolve(string) {
      return path.resolve(__dirname, (string));
    }

    export default defineConfig({
      plugins: [viteJsconfigPaths(), svgrPlugin()],
      resolve: {
        alias: {
          "@styles": resolve('./styles'),
          "@components": resolve('./src/components'),
          "@assets": resolve('./assets'),
          "@utils": resolve('./src/utils')
        }
      },
      esbuild: {
        jsxFactory: 'Nixix.create',
        jsxFragment: '"fragment"',
        jsxImportSource: 'nixix',
        jsxInject: "import Nixix from 'nixix'",
        minifyIdentifiers: true
      }
    });
  