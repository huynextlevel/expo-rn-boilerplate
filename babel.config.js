module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [{
    'plugins': [
      ['@babel/plugin-transform-private-methods', {
      'loose': true
    }]
    ]
  }],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env'
      }
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        cwd: 'babelrc',
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.android.js',
          '.ios.js',
          '.ios.tsx'
        ],
        alias: {
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}
