const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];

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

function initiateCalculator() {
  const buttonsContainer = document.querySelector(".buttons");

  buttons.forEach((symbol) => {
    const button = document.createElement("button");
    button.textContent = symbol;
    button.classList.add("btn");
    button.setAttribute("data-value", symbol);
    buttonsContainer.appendChild(button);
  });

  const clearButton = document.createElement("button");
  clearButton.textContent = "Clear";
  clearButton.classList.add("clear");
  buttonsContainer.appendChild(clearButton);
}

initiateCalculator();
