let currentInput = "";
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

const leftButtons = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  ".",
  "C",
];

const rightButtons = ["/", "x", "-", "+", "="];

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
  if (b === 0) return null;
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return null;
  }
}

const display = document.querySelector("#display");

function resetDisplay() {
  display.textContent = "0";
  display.setAttribute("data-value", "0");
}

function handleReset() {
  currentInput = "";
  firstNumber = null;
  operator = null;
  waitingForSecondNumber = false;
  resetDisplay();
  return;
}

function handleNumber(value) {
  currentInput += value;
  display.textContent = currentInput;
  display.setAttribute("data-value", currentInput);
}

function handleDot(value) {
  if (currentInput.includes(".")) {
    return;
  }
  currentInput += value;
  display.textContent = currentInput;
  display.setAttribute("data-value", currentInput);
}

function initiateButtons() {
  const leftButtonsElement = document.querySelector("#leftButtons");
  const rightButtonsElement = document.querySelector("#rightButtons");

  leftButtons.forEach((symbol) => {
    const button = document.createElement("button");
    button.textContent = symbol;
    button.setAttribute("data-value", symbol);
    button.addEventListener("click", () => {
      if (symbol === "C") {
        handleReset();
      } else if (symbol === ".") {
        handleDot(symbol);
      } else {
        handleNumber(symbol);
      }
    });
    leftButtonsElement.appendChild(button);
  });

  rightButtons.forEach((symbol) => {
    const button = document.createElement("button");
    button.textContent = symbol;
    button.setAttribute("data-value", symbol);
    rightButtonsElement.appendChild(button);
  });
}

resetDisplay();
initiateButtons();
