import { terser } from "rollup-plugin-terser"
import * as meta from "./package.json"

const config = {
  input: "src/index.js",
  external: Object.keys(meta.dependencies || {}).filter(key => /^bs-/.test(key)),
  output: {
    file: `dist/${meta.name}.js`,
    name: "jsutils",
    format: "umd",
    indent: false,
    extend: true,
    banner: `// ${meta.homepage} v${meta.version} Copyright ${new Date().getFullYear()} ${meta.author}`,
    globals: Object.assign(
      {},
      ...Object.keys(meta.dependencies || {})
        .filter(key => /^bs-/.test(key))
        .map(key => ({
          [key]: "bs",
        })),
    ),
  },
  plugins: [],
}

export default [
  config,
  {
    ...config,
    output: {
      ...config.output,
      file: `dist/${meta.name}.min.js`,
    },
    plugins: [
      ...config.plugins,
      terser({
        output: {
          preamble: config.output.banner,
        },
      }),
    ],
  },
]
