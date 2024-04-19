
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
        if (display.textContent.length >= 16) {
            return
        }
        else {
        display.textContent = currentNumber;
        display.textContent += btn.textContent;
        currentNumber += btn.textContent; }
    } )
}

const operatorButtons = document.querySelectorAll(".operator");

for (const btn of operatorButtons) {
    btn.addEventListener('click', () => {
        if (currentNumber === "") {
            operator = btn.textContent;
        } 
        else {
        currentNumber = parseFloat(currentNumber);
        storedNumber = currentNumber;
        currentNumber = "";
        operator = btn.textContent;
        display.textContent = ""; }
    })
}

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', () => {
    currentNumber = parseFloat(currentNumber);
    if (operator === "+") {
        let result = operate(storedNumber, add, currentNumber);
        result = result.toString();
            if (result.length >= 16) {
                result = result.slice(0, 16);
                display.textContent = result;
                result = parseFloat(result);
                storedNumber = result;
                currentNumber = "";
            }
            else {
            display.textContent = result;
            storedNumber = result;
            currentNumber = ""; }
    }

    else if (operator === "−") {
        let result = operate(storedNumber, subtract, currentNumber);
        result = result.toString();
            if (result.length >= 16) {
                result = result.slice(0, 16);
                display.textContent = result;
                result = parseFloat(result);
                storedNumber = result;
                currentNumber = "";
            }
            else {
            display.textContent = result;
            storedNumber = result;
            currentNumber = ""; }
    }

    else if (operator === "÷") {
        let result = operate(storedNumber, divide, currentNumber);
        result = result.toString();
            if (result.length >= 16) {
                result = result.slice(0, 16);
                display.textContent = result;
                result = parseFloat(result);
                storedNumber = result;
                currentNumber = "";
            }
            else {
                display.textContent = result;
                storedNumber = result;
                currentNumber = ""; }
    }

    else if (operator === "×") {
        let result = operate(storedNumber, multiply, currentNumber);
        result = result.toString();
            if (result.length >= 16) {
                result = result.slice(0, 16);
                display.textContent = result;
                result = parseFloat(result);
                storedNumber = result;
                currentNumber = "";
            }
            else {
                display.textContent = result;
                storedNumber = result;
                currentNumber = ""; }
    }
})

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', () => {
    display.textContent = "";
    operator = "";
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
        if (display.textContent.includes(decimalButton.textContent)) {
            return
        }
        else {
    display.textContent += decimalButton.textContent;
    currentNumber += decimalButton.textContent; }}
)