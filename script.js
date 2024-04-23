document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('number-input');
    const buttons = document.querySelectorAll('.button-text');
    let operation = '';
    let firstNumber = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.id;

            switch (value) {
                case 'sign':
                    if (display.innerText) {
                        display.innerText = -parseFloat(display.innerText).toString();
                    }
                    break;
                case '+':
                case '-':
                case 'mult':
                case 'subd':
                case '%':
                    if (display.innerText !== '') {
                        firstNumber = display.innerText;
                        operation = value;
                        display.innerText = '';
                    }
                    break;
                case 'sin':
                    try {
                        const currentVal = parseFloat(display.innerText);
                        const result = Math.sin(currentVal);
                        display.innerText = result.toFixed(2);
                    } catch (e) {
                        display.innerText = 'Error';
                    }
                    break;
                case 'cos':
                    try {
                        const currentVal = parseFloat(display.innerText);
                        const result = Math.cos(currentVal);
                        display.innerText = result.toFixed(2);
                    } catch (e) {
                        display.innerText = 'Error';
                    }
                    break;
                case 'floor':
                    display.innerText = Math.floor(parseFloat(display.innerText));
                    break;
                case 'ceil':
                    display.innerText = Math.ceil(parseFloat(display.innerText));
                    break;
                case 'pow':
                    firstNumber = display.innerText;
                    operation = value;
                    display.innerText = '';
                    break;
                case 'root':
                    firstNumber = display.innerText;
                    operation = value;
                    let resultroot = 0
                    resultroot = Math.sqrt(parseFloat(firstNumber));
                    display.innerText = resultroot;
                    break;
                case '=':
                    const secondNumber = parseFloat(display.innerText);
                    let result = 0;
                    try {
                        switch(operation) {
                            case '+':
                                result = parseFloat(firstNumber) + secondNumber;
                                break;
                            case '-':
                                result = parseFloat(firstNumber) - secondNumber;
                                break;
                            case 'mult':
                                result = parseFloat(firstNumber) * secondNumber;
                                break;
                            case 'subd':
                                result = parseFloat(firstNumber) / secondNumber;
                                break;
                            case '%':
                                result = parseFloat(firstNumber) % secondNumber;
                                break;
                            case 'pow':
                                result = Math.pow(parseFloat(firstNumber), parseFloat(secondNumber));
                                break;

                        }
                        display.innerText = result;
                    } catch (e) {
                        display.innerText = 'Error';
                    }
                    firstNumber = '';
                    operation = '';
                    break;
                case 'c':
                    display.innerText = '';
                    firstNumber = '';
                    operation = '';
                    break;
                case 'backspace':
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                default:
                    display.innerText += this.textContent.trim();
                    break;
            }
        });
    });
});
