
let currentNumber = "";
let operator = "";
let storedNumber = 0;

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

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");

for (const btn of numberButtons) {
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent;
        currentNumber += btn.textContent;
    } )
}

const operatorButtons = document.querySelectorAll(".operator");

for (const btn of operatorButtons) {
    btn.addEventListener('click', () => {
        currentNumber = parseInt(currentNumber);
        storedNumber = currentNumber;
        currentNumber = "";
        operator = btn.textContent;
        display.textContent = "";
    })
}

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', () => {
    currentNumber = parseInt(currentNumber);
    if (operator === "+") {
        display.textContent = operate(storedNumber, add, currentNumber);
    }

    else if (operator === "−") {
        display.textContent = operate(storedNumber, subtract, currentNumber);
    }

    else if (operator === "÷") {
        display.textContent = operate(storedNumber, divide, currentNumber);
    }

    else if (operator === "×") {
        display.textContent = operate(storedNumber, multiply, currentNumber);
    }
})

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', () => {
    display.textContent = "";
    currentNumber = "";
    storedNumber = 0;
})