module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'google',
  ],
  rules: {
    'semi': [2, 'never'],
    'no-undef': 2,
  },
}
