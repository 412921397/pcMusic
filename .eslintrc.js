module.exports = {
  root: true,
  env: {
    //指定代码的运行环境
    browser: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:prettier/recommended", // 这里先配置下，后面有安装
    "prettier",
    "plugin:@typescript-eslint/recommended"
    // "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": 0,
    "no-empty-function": 1, // 禁止出现空函数
    "jsx-a11y/anchor-is-valid": "off" //注销a标签的警告
  }
};
