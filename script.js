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

function initiateButtons() {
  const leftButtonsElement = document.querySelector("#leftButtons");
  const rightButtonsElement = document.querySelector("#rightButtons");

  leftButtons.forEach((symbol) => {
    const button = document.createElement("button");
    button.textContent = symbol;
    button.setAttribute("data-value", symbol);
    leftButtonsElement.appendChild(button);
  });

  rightButtons.forEach((symbol) => {
    const button = document.createElement("button");
    button.textContent = symbol;
    button.setAttribute("data-value", symbol);
    rightButtonsElement.appendChild(button);
  });
}

initiateButtons();
