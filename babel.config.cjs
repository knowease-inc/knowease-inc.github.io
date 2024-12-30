module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-syntax-jsx', // JSX 구문 지원 추가
  ],
}
