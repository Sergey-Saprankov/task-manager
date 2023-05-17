module.exports = {
  extends: 'eslint-config-it-incubator',
  plugins: ['import'],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^@/'] }],
  },
}
