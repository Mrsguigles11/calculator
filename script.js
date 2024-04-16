
let firstNumber = 0;
let operator = "";
let secondNumber = 0;

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
    return a / b;
}

function operate(a, oper, b) {
    return oper(a, b);
}

console.log(operate(2, subtract, 4));