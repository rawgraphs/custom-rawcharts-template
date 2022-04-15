import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import localResolve from 'rollup-plugin-local-resolve'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image'
import { string } from 'rollup-plugin-string'
import { rawGraphCss } from './bundler/rollupPluginRAWGraphCss'
import pkg from './package.json'

const vendors = []
  // Make all external dependencies to be exclude from rollup
  .concat(
    Object.keys(pkg.dependencies || {}), // TODO: keep or not?
    Object.keys(pkg.peerDependencies || {}),
    Object.keys(pkg.devDependencies || {})
  )
  .concat('./styles/base.css')

const GlobalVendors = ['d3', '@rawgraphs/rawgraphs-core']

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)
  return (id) => pattern.test(id)
}

export default ['esm', 'cjs', 'umd'].map((format) => ({
  input: {
    index: 'src/index.js',
  },
  output: [
    {
      dir: 'lib',
      entryFileNames: '[name].[format].js',
      exports: 'named',
      name: 'myAwsesomeCharts',
      format,
      globals: {
        '@rawgraphs/rawgraphs-core': 'rawgraphsCore',
        d3: 'd3',
      },
    },
  ],
  external: makeExternalPredicate(format === 'umd' ? GlobalVendors : vendors),
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    localResolve(),
    commonjs({ include: /node_modules/ }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    image(),
    rawGraphCss({
      include: '**/*.raw.css',
    }),
    string({
      include: '**/*.css',
      exclude: '**/*.raw.css',
    }),
  ].concat(
    format === 'umd'
      ? [
          resolve(),
          terser()
        ]
      : []
  ),
}))
