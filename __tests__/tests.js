module.exports = {
  testEnvironment: "jsdom",
};


const fs = require('fs');
const { afterEach } = require('node:test');
const path = require("path");
const { addListener } = require('process');

const sourceHtmlPath = path.join(__dirname, '..', "public",   'index.html');
const sourceJsPath = path.join(__dirname, "..","public", "script.js");




describe("Calculator operations", () => {
  document.body.innerHTML = fs.readFileSync(sourceHtmlPath, 'utf8');
  const script = require(sourceJsPath);

  script.addListeners();


  const floorElement = document.getElementById("floor");
  const ceilElement = document.getElementById("ceil");
  const cElement = document.getElementById("c");
  const backspaceElement = document.getElementById("backspace");
  const percentElement = document.getElementById("%");
  const powElement = document.getElementById("pow");
  const rootElement = document.getElementById("root");
  const subdElement = document.getElementById("subd");
  const sevenElement = document.getElementById("7");
  const eightElement = document.getElementById("8");
  const nineElement = document.getElementById("9");
  const multElement = document.getElementById("mult");
  const fourElement = document.getElementById("4");
  const fiveElement = document.getElementById("5");
  const sixElement = document.getElementById("6");
  const minusElement = document.getElementById("-");
  const threeElement = document.getElementById("3");
  const twoElement = document.getElementById("2");
  const oneElement = document.getElementById("1");
  const plusElement = document.getElementById("+");
  const signElement = document.getElementById("sign");
  const zeroElement = document.getElementById("0");
  const dotElement = document.getElementById(".");
  const equalsElement = document.getElementById("=");
  const sinElement = document.getElementById("sin");
  const cosElement = document.getElementById("cos");

  const inputDisplay = document.getElementById("number-input");
  


  test("enter 1", () => {
      oneElement.click();
      expect(inputDisplay.textContent).toBe("1");
      cElement.click();
  });

  test("adds 1 + 2 to equal 3", () => {
      
      oneElement.click();
      plusElement.click();
      twoElement.click();
      equalsElement.click();
      
      expect(inputDisplay.textContent).toBe("3");
      cElement.click();
    });
  
    test("subtracts 2 - 1 to equal 1", () => {
      twoElement.click();
      minusElement.click();
      oneElement.click();
      equalsElement.click();
      expect(inputDisplay.textContent).toBe("1");
      cElement.click();
    });
  
    test("multiplies 1 x 2 to equal 2", () => {
      oneElement.click();
      multElement.click();
      twoElement.click();
      equalsElement.click();
      expect(inputDisplay.textContent).toBe("2");
      cElement.click();
    });
  
    test("divides 2 / 1 to equal 2", () => {
      twoElement.click();
      subdElement.click();
      oneElement.click();
      equalsElement.click();
      expect(inputDisplay.textContent).toBe("2");
      cElement.click();
    });
  
    test("calculate sin(3.14) to equal 0.00", () => {
      threeElement.click();
      dotElement.click();
      oneElement.click();
      fourElement.click();
      sinElement.click();
      expect(Number(inputDisplay.textContent)).toBeCloseTo(0.00, 2);
      cElement.click();
    });
  
    test("calculate cos(0) to equal 1.00", () => {
      zeroElement.click();
      cosElement.click();
      expect(Number(inputDisplay.textContent)).toBeCloseTo(1.00, 2);
      cElement.click();
    });
  });