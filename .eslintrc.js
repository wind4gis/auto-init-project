module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["nodejs"],
  plugins: ["import"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "linebreak-style": 0,
    "quotes": 0,
    "max-len": 0,
    "no-unused-vars": 1,
    "semi": 1,
    "arrow-parens": 0,
  }
};
