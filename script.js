
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
        if (display.textContent.length >= 14) {
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
        if (currentNumber.length > 0 && storedNumber > 0) {
            currentNumber = parseFloat(currentNumber);
                if (operator === "+") {
                    display.textContent = operate(storedNumber, add, currentNumber);
                    storedNumber = operate(storedNumber, add, currentNumber);
                }
                else if (operator === "−") {
                    display.textContent = operate(storedNumber, subtract, currentNumber);
                    storedNumber = operate(storedNumber, subtract, currentNumber);
                }
                else if (operator === "×") {
                    display.textContent = operate(storedNumber, multiply, currentNumber);
                    storedNumber = operate(storedNumber, multiply, currentNumber);
                }
                else if (operator === "÷") {
                    if (currentNumber === 0) {
                        display.textContent = "No can do!"
                    }
                    else {
                        display.textContent = operate(storedNumber, divide, currentNumber);
                        storedNumber = operate(storedNumber, divide, currentNumber); }
                } 
            operator = btn.textContent;
            currentNumber = "";
        }
        else if (currentNumber === "") {
            operator = btn.textContent;
            display.textContent = "";
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
            if (result.length >= 14) {
                result = result.slice(0, 14);
                display.textContent = result;
                result = parseFloat(result);
                storedNumber = result;
            }
            else {
                result = parseFloat(result);
                display.textContent = result;
                storedNumber = result; }
    }

    else if (operator === "−") {
        let result = operate(storedNumber, subtract, currentNumber);
        result = result.toString();
            if (result.length >= 14) {
                result = result.slice(0, 14);
                display.textContent = result;
                result = parseFloat(result);
                storedNumber = result;
            }
            else {
                result = parseFloat(result);
                display.textContent = result;
                storedNumber = result; }
    }

    else if (operator === "÷") {
        if (currentNumber === 0) {
            display.textContent = "No can do!"
        }
        else {
            let result = operate(storedNumber, divide, currentNumber);
            result = result.toString();
                if (result.length >= 14) {
                    result = result.slice(0, 14);
                    display.textContent = result;
                    result = parseFloat(result);
                    storedNumber = result;
                }
                else {
                    result = parseFloat(result);
                    display.textContent = result;
                    storedNumber = result; }
    } }

    else if (operator === "×") {
        let result = operate(storedNumber, multiply, currentNumber);
        result = result.toString();
            if (result.length >= 14) {
                result = result.slice(0, 14);
                display.textContent = result;
                result = parseFloat(result);
                storedNumber = result;
            }
            else {
                result = parseFloat(result);
                display.textContent = result;
                storedNumber = result; }
    }
    operator = "";
    currentNumber = "";
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

window.addEventListener('keydown', checkKey);

function checkKey(evt) {
    if (display.textContent.length >= 14) {
        return
    }
    else if ((evt.keyCode === 49) || (evt.keyCode === 97)) {
        display.textContent = currentNumber;
        display.textContent += "1";
        currentNumber += "1"; } 
    else if ((evt.keyCode === 50) || (evt.keyCode === 98)) {
        display.textContent = currentNumber;
        display.textContent += "2";
        currentNumber += "2"; }
    else if ((evt.keyCode === 51) || (evt.keyCode === 99)) {
        display.textContent = currentNumber;
        display.textContent += "3";
        currentNumber += "3"; }
    else if ((evt.keyCode === 52) || (evt.keyCode === 100)) {
        display.textContent = currentNumber;
        display.textContent += "4";
        currentNumber += "4"; }
    else if ((evt.keyCode === 53) || (evt.keyCode === 101)) {
        display.textContent = currentNumber;
        display.textContent += "5";
        currentNumber += "5"; }
    else if ((evt.keyCode === 54) || (evt.keyCode === 102)) {
        display.textContent = currentNumber;
        display.textContent += "6";
        currentNumber += "6"; }
    else if ((evt.keyCode === 55) || (evt.keyCode === 103)) {
        display.textContent = currentNumber;
        display.textContent += "7";
        currentNumber += "7"; }
    else if ((evt.keyCode === 56) || (evt.keyCode === 104)) {
        display.textContent = currentNumber;
        display.textContent += "8";
        currentNumber += "8"; }
    else if ((evt.keyCode === 57) || (evt.keyCode === 105)) {
        display.textContent = currentNumber;
        display.textContent += "9";
        currentNumber += "9"; }
    else if ((evt.keyCode === 48) || (evt.keyCode === 96)) {
        display.textContent = currentNumber;
        display.textContent += "0";
        currentNumber += "0"; }
    } 

