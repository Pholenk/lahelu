module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@data-source': `./src/data-layer`,
          '@navigation': './src/navigation',
          '@ui': './src/ui',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
