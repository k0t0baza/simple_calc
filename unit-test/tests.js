module.exports = {
  testEnvironment: "jsdom",
};

describe("Calculator operations", () => {
  // Установка HTML структуры для калькулятора
  document.body.innerHTML = `
      <div id="number-input"></div>
      <div class="button-text" id="sin">sin</div>
      <div class="button-text" id="cos">cos</div>
      <div class="button-text" id="+">+</div>
      <div class="button-text" id="-">-</div>
      <div class="button-text" id="mult">x</div>
      <div class="button-text" id="subd">/</div>
      <div class="button-text" id="=">=</div>
      <div class="button-text" id="1">1</div>
      <div class="button-text" id="2">2</div>
      <div class="button-text" id="90">90</div>
    `;

  require("../script.js"); // Указать путь к вашему скрипту калькулятора

  const sinButton = document.getElementById("sin");
  const cosButton = document.getElementById("cos");
  const addButton = document.getElementById("+");
  const subtractButton = document.getElementById("-");
  const multiplyButton = document.getElementById("mult");
  const divideButton = document.getElementById("subd");
  const equalsButton = document.getElementById("=");
  const inputDisplay = document.getElementById("number-input");
  const numButton1 = document.getElementById("1");
  const numButton2 = document.getElementById("2");
  const numButton90 = document.getElementById("90");

  const degreesToRadians = (degrees) => degrees * (Math.PI / 180);

  test("adds 1 + 2 to equal 3", () => {
    numButton1.click();
    addButton.click();
    numButton2.click();
    equalsButton.click();
    expect(inputDisplay.textContent).toBe("3");
  });

  test("subtracts 2 - 1 to equal 1", () => {
    numButton2.click();
    subtractButton.click();
    numButton1.click();
    equalsButton.click();
    expect(inputDisplay.textContent).toBe("1");
  });

  test("multiplies 1 x 2 to equal 2", () => {
    numButton1.click();
    multiplyButton.click();
    numButton2.click();
    equalsButton.click();
    expect(inputDisplay.textContent).toBe("2");
  });

  test("divides 2 / 1 to equal 2", () => {
    numButton2.click();
    divideButton.click();
    numButton1.click();
    equalsButton.click();
    expect(inputDisplay.textContent).toBe("2");
  });

  test("calculate sin(90) to equal 1.00", () => {
    numButton90.click(); // ввод 90
    sinButton.click();
    expect(inputDisplay.textContent).toBeCloseTo("1.00", 2);
  });

  test("calculate cos(0) to equal 1.00", () => {
    numButton1.click();
    numButton1.click();
    cosButton.click();
    expect(inputDisplay.textContent).toBeCloseTo("1.00", 2);
  });
});
