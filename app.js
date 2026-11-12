// Fix 1: add a subtract helper. divide() still has no zero check.
function divide(a, b) {
  return a / b;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { divide, add, subtract };
