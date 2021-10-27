module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'mocha',
  ],
  rules: {
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'class-methods-use-this': 'off',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-setup-in-describe': 'off',
    'mocha/no-skipped-tests': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'max-len': [
      'error',
      110,
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'throw'
      },
      {
        'blankLine': 'always',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': [
          'const',
          'let',
          'var'
        ]
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        'allow': [
          '_id',
          '__v'
        ]
      }
    ],
    'no-useless-catch': [
      'error'
    ],
    'func-names': [
      'off'
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ]

  },
};
