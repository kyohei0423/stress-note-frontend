module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-unresolved": 0, // Next.jsが設定してるmodule aliasがあるため、無効にする
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }], // tsxファイルを対象にする
    "react/react-in-jsx-scope": 0, // Next.jsでは、自動でReactをimportするので無効にする
    "@typescript-eslint/explicit-module-boundary-types": 0, // 型推論を使用するため明示的に戻り地の型を指定しなくても良い
    "jsx-a11y/anchor-is-valid": 0, // Next.jsではスタイリングのためにhrefのないaタグを使用することがあるので無効にする
    "import/prefer-default-export": 0, // named exportを使用するため無効にする
  },
};
