const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  // Bộ luật khuyến nghị của ESLint
  js.configs.recommended,

  // Code chạy trên Node, dùng require/module.exports
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
  },

  // File test của Jest có thêm describe, test, expect
  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },

  // Bỏ qua thư mục không phải code của bạn
  { ignores: ["node_modules/", "coverage/"] },
];