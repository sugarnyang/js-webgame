const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let answer;
const first = String(Math.floor(Math.random() * 10)) // 3
const second = String(Math.floor(Math.random() * 10)) // 0
const third = String(Math.floor(Math.random() * 10)) // 4
const fourth = String(Math.floor(Math.random() * 10)) // 6
first + second + third + fourth // 3046

let count = 0;
check.addEventListener('click', () => {
    const value = input.value; //문자열 ex) '3046' true truthy
    // 0, '', NaN, false, null, undefined -> falsy value
    if (value && value.length === 4) { // 앰퍼센드 AND 연산자 / 보호연산자
        if (answer === value) {

        }
    }
});