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
        temp = numberInput.value;
        operator = '+';
    }
})

clearButton.addEventListener('click', () => {

})

resultButton.addEventListener('click', () => {

})

