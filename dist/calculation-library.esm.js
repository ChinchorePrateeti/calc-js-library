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

export { add, divide, hello, multiply, subtract };
//# sourceMappingURL=calculation-library.esm.js.map
