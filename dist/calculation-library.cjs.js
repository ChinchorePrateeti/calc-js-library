'use strict';

function greet(name) {
  return `Hello, ${name}!`;
}

function hello(name) {
  return greet(name);
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
}

exports.add = add;
exports.divide = divide;
exports.hello = hello;
exports.multiply = multiply;
exports.subtract = subtract;
//# sourceMappingURL=calculation-library.cjs.js.map
