// index.test.js
const { add } = require("./index");

test("add cộng hai số", () => {
  expect(add(1, 2)).toBe(3);
});