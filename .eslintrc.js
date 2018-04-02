module.exports = {
  root: true,
  extends: 'standard',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  rules: {
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never'
      }
    ]
  }
}
