module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    camelcase: ['off'],
    indent: ['error', 2, { SwitchCase: 1 }], // Отступы для JS
    semi: [2, 'always', { omitLastInOneLineBlock: true }], // Точки с запятой
    'comma-dangle': ['error', 'always-multiline'], // Запятые после многострочных свойств объекта
    'no-lonely-if': ['error'], // Запятые после многострочных свойств объекта
    'space-before-function-paren': ['error', { // Пробел после названия функции
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    'vue/html-indent': ['error', 2], // Отступы для HTML
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/order-in-components': ['off'],
  },
};
