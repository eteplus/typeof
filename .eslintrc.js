module.exports = {
  root: true,
  extends: 'standard',
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
