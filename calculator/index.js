const numberInput = document.querySelector('#input');
const clearButton = document.querySelector('#clear');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const calculateButton = document.querySelector('#calculate');
const resultInput = document.querySelector('#result'); // 태그는 객체 

let temp; // 임시값
let operator; // 연산자

plusButton.addEventListener('click', () => {
    operator = '+';
    calculate(operator);
})
minusButton.addEventListener('click', () => {
    operator = '-';
    calculate(operator);
})
divideButton.addEventListener('click', () => {
    operator = '/';
    calculate(operator);
})
multiplyButton.addEventListener('click', () => {
    operator = '*';
    calculate(operator);
})

calculateButton.addEventListener('click', () => {
    calculate(operator);
    resultInput.value = Number(temp);
})

function calculate(operator) {
    const before = temp;
    if (numberInput.value) {
        if (temp) {
            if (operator === '+') {
                temp = temp + Number(numberInput.value);
            } else if (operator === '-') {
                temp = temp - Number(numberInput.value);
            } else if (operator === '*') {
                temp = temp * Number(numberInput.value);
            } else if (operator === '/') {
                temp = temp / Number(numberInput.value);
            }
        } else {
            temp = Number(numberInput.value);
        }
    } 
    const after = temp;
    console.log(before + operator + Number(numberInput.value) + '=' + after);
    numberInput.value = null;
    operator = null;
}

clearButton.addEventListener('click', () => {
    numberInput.value = null;
    temp = null;
    operator = null;
    resultInput.value = null;
})