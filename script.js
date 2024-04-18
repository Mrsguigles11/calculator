
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
        currentNumber = parseFloat(currentNumber);
        storedNumber = currentNumber;
        currentNumber = "";
        operator = btn.textContent;
        display.textContent = "";
    })
}

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', () => {
    currentNumber = parseFloat(currentNumber);
    if (operator === "+") {
        let result = operate(storedNumber, add, currentNumber);
        display.textContent = result;
        storedNumber = result;
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

const backspaceButton = document.querySelector(".backspace");

backspaceButton.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber;
})

const decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener('click', () => {
    display.textContent += decimalButton.textContent;
    currentNumber += decimalButton.textContent;
})