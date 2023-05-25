module.exports = {
      env: {
            browser: true,
            node: true,
            es2020: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            ecmaFeatures: {
                  jsx: true,
            },
      },
      plugins: ['@typescript-eslint', 'react', 'prettier'],
      extends: [
            'airbnb',
            'airbnb/hooks',
            'plugin:@typescript-eslint/recommended',
            'plugin:react/recommended',
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:import/typescript',
            'prettier',
      ],
      rules: {
            'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
            'import/extensions': 'off',
            'react/prop-types': 'off',
            'jsx-a11y/anchor-is-valid': 'off',
            'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
            'react/no-unescaped-entities': 'off',
            'import/no-cycle': [0, { ignoreExternal: true }],
            'prefer-const': 'off',
            'no-use-before-define': 'off',
            "react/react-in-jsx-scope": "off",
            "no-shadow": "off",
            "react/jsx-uses-react": "off",
            "no-return-assign": "off",
            "no-param-reassign": 0,
            'no-plusplus': 'off',
            "react-hooks/rules-of-hooks": "off",
            "react-hooks/exhaustive-deps": "off",
            "no-extra-boolean-cast": "off",
            "jsx-no-bind": "off",
            "no-console": "off",
            "import/prefer-default-export": "off",
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-noninteractive-element-interactions': 'off',
            "import/no-unresolved": "off",
            "react/require-default-props": [
                  "error",
                  {
                        "forbidDefaultForRequired": true,
                        "functions": "defaultArguments"
                  }
            ],
            "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
            "eqeqeq": "off",
            "jsx-a11y/control-has-associated-label": "off",
            "react/no-array-index-key": "off",
      },
      settings: {
            'import/resolver': {
                  'babel-module': {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                  },
                  node: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx'],
                        paths: ['src'],
                  },
            },
      },
}
