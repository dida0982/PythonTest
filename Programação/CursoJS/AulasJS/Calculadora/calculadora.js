let input = document.querySelector('.input');

function addToDisplay(value) {
    input.value += value;
}

function clearDisplay() {
    input.value = '';
}

function calculate() {
    let expression = input.value;
    if (expression.includes('*')) {
        expression = expression.replace('*', '*');
    }
    if (expression.includes('÷')) {
        expression = expression.replace('÷', '/');
    }
    input.value = eval(expression);
}

