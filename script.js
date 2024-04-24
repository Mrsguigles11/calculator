
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
    btn.addEventListener('click', function() {
        pressNumber(btn.textContent);
    })} 
    
function pressNumber(num) {
    if (display.textContent.length >= 14) {
        return
    }
    else {
        display.textContent = currentNumber;
        display.textContent += num;
        currentNumber += num; }
    } 


const operatorButtons = document.querySelectorAll(".operator");

for (const btn of operatorButtons) {
    btn.addEventListener('click', function() {
        doSum(btn.textContent);
    })
}
    
function doSum(input) {
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
            operator = input;
            currentNumber = "";
        }
        else if (currentNumber === "") {
            operator = input;
            display.textContent = "";
        } 
        else {
            currentNumber = parseFloat(currentNumber);
            storedNumber = currentNumber;
            currentNumber = "";
            operator = input;
            display.textContent = ""; }
    }

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', pressEquals);

function pressEquals()  {
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
}

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', pressClear);

function pressClear() {
    display.textContent = "";
    operator = "";
    currentNumber = "";
    storedNumber = 0;
}

const backspaceButton = document.querySelector(".backspace");

backspaceButton.addEventListener('click', pressBackspace);
    
function pressBackspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber; }


const decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener('click', function() {
    pressDecimal(decimalButton.textContent);
})

function pressDecimal(decimal) {
    if (display.textContent.includes(decimal)) {
        return
        }
    else {
        display.textContent += decimal;
        currentNumber += decimal; }}


window.addEventListener('keydown', checkKey);

function checkKey(evt) {
    if ((evt.keyCode === 49) || (evt.keyCode === 97)) {
        pressNumber("1"); } 
    else if ((evt.keyCode === 50) || (evt.keyCode === 98)) {
        pressNumber("2"); }
    else if ((evt.keyCode === 51) || (evt.keyCode === 99)) {
        pressNumber("3");;}
    else if ((evt.keyCode === 52) || (evt.keyCode === 100)) {
        pressNumber("4"); }
    else if ((evt.keyCode === 53) || (evt.keyCode === 101)) {
        pressNumber("5"); }
    else if ((evt.keyCode === 54) || (evt.keyCode === 102)) {
        pressNumber("6"); }
    else if ((evt.keyCode === 55) || (evt.keyCode === 103)) {
        pressNumber("7"); }
    else if ((evt.keyCode === 56) || (evt.keyCode === 104)) {
        pressNumber("8"); }
    else if ((evt.keyCode === 57) || (evt.keyCode === 105)) {
        pressNumber("9"); }
    else if ((evt.keyCode === 48) || (evt.keyCode === 96)) {
        pressNumber("0"); }
    else if (evt.keyCode === 107) {
        doSum("+");
    }
    else if (evt.keyCode === 109) {
        doSum("−");
    }
    else if (evt.keyCode === 111) {
        doSum("÷");
    }
    else if (evt.keyCode === 106) {
        doSum("×");
    }
    else if (evt.keyCode === 8) {
        pressBackspace();
    }
    else if ((evt.keyCode === 110) || (evt.keyCode === 190)) {
        pressDecimal(".");
    }
    else if (evt.keyCode === 13) {
        pressEquals();
    }
    else if (evt.keyCode === 27) {
        pressClear();
    }
    } 



