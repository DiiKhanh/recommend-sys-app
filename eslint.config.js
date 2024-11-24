import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      }
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      // ...js.configs.recommended.rules,
      // ...react.configs.recommended.rules,
      // ...react.configs['jsx-runtime'].rules,
      // ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      "no-unused-vars": ["warn", {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }],
      "react/jsx-uses-vars": "warn",
      "react/jsx-uses-react": "warn",
      "no-console": 1,
      "no-lonely-if": 1,
      "no-trailing-spaces": 1,
      "no-multi-spaces": 1,
      "no-multiple-empty-lines": 1,
      "space-before-blocks": ["error", "always"],
      "object-curly-spacing": [1, "always"],
      "indent": ["warn", 2],
      "array-bracket-spacing": 1,
      "linebreak-style": 0,
      "no-unexpected-multiline": "warn",
      "keyword-spacing": 1,
      "comma-dangle": 1,
      "comma-spacing": 1,
      "arrow-spacing": 1,
      "array-bracket-spacing": ["warn", "always"],  // Khoảng cách trong dấu ngoặc vuông
      "array-bracket-newline": ["warn", { 
        "multiline": true,
        "minItems": 3
      }],  // Xuống dòng khi mảng có nhiều phần tử
      "array-element-newline": ["warn", {
        "multiline": true,
        "minItems": 3
      }],
      "semi": ["error", "never"],  // Không cho phép sử dụng dấu chấm phẩy
      "semi-spacing": ["error", {"before": false, "after": true}],
    }
  }
];
