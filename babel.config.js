module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js'
        ],
        alias: {
          database: './src/database',
          components: './src/components',
          helper: './src/helper'
        }
      }
    ],
    'react-native-paper/babel'
  ]
};
