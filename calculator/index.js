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
    if (numberInput.value) {
        temp = Number(numberInput.value);
        operator = '+';
        numberInput.value = null;
    }
})

clearButton.addEventListener('click', () => {
    numberInput.value = null; 
    temp = null; 
    operator = null; //취향에 따라서 undefined을 넣어도 된다. 둘 다 빈값이라는 뜻.
    //자바스크립트를 어느정도 이해했을때 null과 undefined를 구분해서 써보아라.
})

calculateButton.addEventListener('click', () => {
    if (operator) {
        if (numberInput.value) {
            if (operator === '+') {
                resultInput.value = temp + Number(numberInput.value);
            } else if (operator === '-') {
                resultInput.value = temp - Number(numberInput.value);
            } else if (operator === '*') {
                resultInput.value = temp * Number(numberInput.value);
            } else if (operator === '/') {
                resultInput.value = temp / Number(numberInput.value);
            }
        }
    } else {
        if (numberInput.value) {
            resultInput.value = temp;
        }
    }
})

