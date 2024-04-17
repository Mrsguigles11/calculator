
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

let numberButton = document.querySelectorAll(".number");
let display = document.querySelector(".display");

for (const btn of numberButton) {
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent;
        currentNumber += btn.textContent;
        console.log(currentNumber);
    } )
}
