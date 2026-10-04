// index.js
const { exec } = require("child_process");

function run(userInput) {
  exec("ls " + userInput);
}

function add(a, b) {
  return a + b;
}
module.exports = { add , run };