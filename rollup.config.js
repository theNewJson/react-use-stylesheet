import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import pkg from './package.json';
import * as react from 'react';

const extensions = [".js", ".ts", ".jsx", ".tsx", ".json"];
const external = [
  // ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];
export default [
	// browser-friendly UMD build
	// {
	// 	input: 'src/index.ts',
	// 	output: {
	// 		name: 'useStylesheet',
	// 		file: pkg.browser,
	// 		format: 'umd',
  //     exports: 'named',
  //     globals: {
  //       react: 'react',
  //       "react-dom": 'reactDom'
  //     },
	// 	},
  //   external,
	// 	plugins: [
	// 		resolve({ extensions }), // so Rollup can find `ms`
	// 		commonjs({
  //       // namedExports: {
  //       //   react: Object.keys(react),
  //       // },
  //     }), // so Rollup can convert `ms` to an ES module
	// 		babel({
	// 			exclude: ['node_modules/**'],
  //       extensions,
	// 		})
	// 	]
	// },

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/index.ts',
    external,
		output: [
			{ file: pkg.main, format: 'cjs', exports: 'named' },
			{ file: pkg.module, format: 'es', exports: 'named' }
		],
    // external,
		plugins: [
      resolve({
        alias: {
          react: './node_modules/react'
        }
      }),
      commonjs(),
			babel({
				exclude: ['node_modules/**'],
        extensions,
			})
		]
	}
  // {
	// 	input: 'demo/index.tsx',
  //   external: ['react', 'react-dom'],
  //   globals: {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM'
  //  },
	// 	output: {
  //     file: "dist/bundle.js",
  //     format: "umd",
  //     // exports: 'named',
  //     // sourcemap: true
  //   },
  //   // external: ['react', 'react-dom'],
  //   plugins: [
  //     resolve({
  //       extensions,
  //     }),
  //     replace({
  //       'process.env.NODE_ENV': JSON.stringify( 'development' )
  //     }),
  //     commonjs(),
  //     // commonjs({
  //     //   namedExports: {
  //     //     'react/jsx-runtime': ['jsx', 'jsxs']
  //     //   }
  //     // }),
  //     babel({
  //       // exclude: ['node_modules/**'],
  //       extensions,
  //       ...babelOptions,
  //     }),
  //     serve({
  //       open: true,
  //       verbose: true,
  //       contentBase: ["", "public"],
  //       host: "localhost",
  //       port: 3001,
  //     }),
  //     livereload({ watch: "dist" }),
  //   ]
	// }
];