
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

let numberButtons = document.querySelectorAll(".number");
let display = document.querySelector(".display");

for (const btn of numberButtons) {
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent;
        currentNumber += btn.textContent;
        console.log(currentNumber);
    } )
}

let operatorButtons = document.querySelectorAll(".operator");

for (const btn of operatorButtons) {
    btn.addEventListener('click', () => {
        currentNumber = parseInt(currentNumber);
        storedNumber = currentNumber;
        currentNumber = "";
        operator = btn.textContent;
        display.textContent = "";
    })
}