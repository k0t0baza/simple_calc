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
  

  //Тест ввода
  test("enter 1", () => {
      oneElement.click();
      expect(inputDisplay.textContent).toBe("1");
      cElement.click();
  });

  test("enter 123 should display 123", () => {
    oneElement.click();
    twoElement.click();
    threeElement.click();
    expect(inputDisplay.textContent).toBe("123");
    cElement.click();
  });

  test("12345 double erase should result 123", () => {
    inputDisplay.textContent = "12345";
    backspaceElement.click();
    backspaceElement.click();
    expect(inputDisplay.textContent).toBe("123");
    cElement.click();
  });

  //Тест операции сложения
  test("adds 1 + 2 to equal 3", () => {
      
      oneElement.click();
      plusElement.click();
      twoElement.click();
      equalsElement.click();
      
      expect(inputDisplay.textContent).toBe("3");
      cElement.click();
    });

  test("adds -6 + 10 to equal 4", () => {
    sixElement.click();
    signElement.click();
    plusElement.click();
    oneElement.click();
    zeroElement.click();
    equalsElement.click();

    expect(inputDisplay.textContent).toBe("4");
    cElement.click();
  });

  test("adds -6 + 10 + 5 to equal 9", () => {
    sixElement.click();
    signElement.click();
    plusElement.click();
    equalsElement.click();
    plusElement.click();
    nineElement.click();
    
    expect(inputDisplay.textContent).toBe("9");
    cElement.click();
  });

  //Тест операции вычитания
    test("subtracts 2 - 1 to equal 1", () => {
      twoElement.click();
      minusElement.click();
      oneElement.click();
      equalsElement.click();
      expect(inputDisplay.textContent).toBe("1");
      cElement.click();
    });

    test("subtracts -6 - (-6) to equal 0", () => {
      sixElement.click();
      signElement.click();
      minusElement.click();
      sixElement.click();
      signElement.click();
      equalsElement.click();

      expect(inputDisplay.textContent).toBe("0");
      cElement.click();
    });
  
    //Тест операции умножения
    test("multiplies 1 x 2 to equal 2", () => {
      oneElement.click();
      multElement.click();
      twoElement.click();
      equalsElement.click();
      expect(inputDisplay.textContent).toBe("2");
      cElement.click();
    });

    test("multiple -5 x 5 to equal -25", () => {
      fiveElement.click();
      signElement.click();
      multElement.click();
      fiveElement.click();
      equalsElement.click();

      expect(inputDisplay.textContent).toBe("-25");
      cElement.click();
    });
  
    //Тест операции деления
    test("divides 2 / 1 to equal 2", () => {
      twoElement.click();
      subdElement.click();
      oneElement.click();
      equalsElement.click();
      expect(inputDisplay.textContent).toBe("2");
      cElement.click();
    });

    test("divides -25 / 5 to equal -5", () => {
      twoElement.click();
      fiveElement.click();
      signElement.click();
      subdElement.click();
      fiveElement.click();
      equalsElement.click();

      expect(inputDisplay.textContent).toBe("-5");
      cElement.click();
    });
  
    //Тест операции sin
    test("calculate sin(3.14) to equal 0.00", () => {
      threeElement.click();
      dotElement.click();
      oneElement.click();
      fourElement.click();
      sinElement.click();
      expect(Number(inputDisplay.textContent)).toBeCloseTo(0.00, 2);
      cElement.click();
    });
  
    //Тест операции cos
    test("calculate cos(0) to equal 1.00", () => {
      zeroElement.click();
      cosElement.click();
      expect(Number(inputDisplay.textContent)).toBeCloseTo(1.00, 2);
      cElement.click();
    });

    //Тест операции mod
    test("56 mod 5 equal to 2.8", () => {
      fiveElement.click();
      sixElement.click();
      percentElement.click();
      fiveElement.click();
      equalsElement.click();

      expect(Number(inputDisplay.textContent)).toBeCloseTo(1, 2);
      cElement.click();
    });

    test("56 mod 555 equal to 56", () => {
      fiveElement.click();
      sixElement.click();
      percentElement.click();
      fiveElement.click();
      fiveElement.click();
      fiveElement.click();
      equalsElement.click();

      expect(inputDisplay.textContent).toBe("56");
      cElement.click();
    });

    //Тест операции возведения в степень
    test("2 in power of 10 equal to 1024", () => {
      twoElement.click();
      powElement.click();
      oneElement.click();
      zeroElement.click();
      equalsElement.click();

      expect(inputDisplay.textContent).toBe("1024");
      cElement.click();
    });

    //Тест операции извлечения квадратного корня
    test("square root of 25 equal to 5", () => {
      twoElement.click();
      fiveElement.click();
      rootElement.click();

      expect(inputDisplay.textContent).toBe("5");
      cElement.click();
    });

    //Тест операций округления
    test("1.2 ceil equal to 2", () => {
      oneElement.click();
      dotElement.click();
      twoElement.click();
      ceilElement.click();

      expect(inputDisplay.textContent).toBe("2");
      cElement.click();
    });

    test("1.2 floor equal to 1", () => {
      oneElement.click();
      dotElement.click();
      twoElement.click();
      floorElement.click();

      expect(inputDisplay.textContent).toBe("1");
      cElement.click();
    });
  });