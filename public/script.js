function addListeners() {
    const display = document.getElementById('number-input');
    const buttons = document.querySelectorAll('.button-text');
    let operation = '';
    let firstNumber = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            
            const value = this.id;

            switch (value) {
                case 'sign':
                    if (display.textContent) {
                        display.textContent = -parseFloat(display.textContent).toString();
                    }
                    break;
                case '+':
                case '-':
                case 'mult':
                case 'subd':
                case '%':
                    if (display.textContent !== '') {
                        firstNumber = display.textContent;
                        operation = value;
                        display.textContent = '';
                    }
                    break;
                case 'sin':
                    try {
                        const currentVal = parseFloat(display.textContent);
                        const result = Math.sin(currentVal);
                        display.textContent = result.toFixed(2);
                    } catch (e) {
                        display.textContent = 'Error';
                    }
                    break;
                case 'cos':
                    try {
                        const currentVal = parseFloat(display.textContent);
                        const result = Math.cos(currentVal);
                        display.textContent = result.toFixed(2);
                    } catch (e) {
                        display.textContent = 'Error';
                    }
                    break;
                case 'floor':
                    display.textContent = Math.floor(parseFloat(display.textContent));
                    break;
                case 'ceil':
                    display.textContent = Math.ceil(parseFloat(display.textContent));
                    break;
                case 'pow':
                    firstNumber = display.textContent;
                    operation = value;
                    display.textContent = '';
                    break;
                case 'root':
                    firstNumber = display.textContent;
                    operation = value;
                    let resultroot = 0
                    resultroot = Math.sqrt(parseFloat(firstNumber));
                    display.textContent = resultroot;
                    break;
                case '=':
                    const secondNumber = parseFloat(display.textContent);
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
                        display.textContent = result;
                    } catch (e) {
                        display.textContent = 'Error';
                    }
                    firstNumber = '';
                    operation = '';
                    break;
                case 'c':
                    display.textContent = '';
                    firstNumber = '';
                    operation = '';
                    break;
                case 'backspace':
                    display.textContent = display.textContent.slice(0, -1);
                    break;
                default:
                    display.textContent += this.textContent.trim();
                    
                    break;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', addListeners);

module.exports = {
    addListeners: addListeners
};
