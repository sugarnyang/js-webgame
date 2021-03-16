const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let answer = [];
let n = 0;
while (n <= 3) {
    answer[n] = Math.floor(Math.random() * 10); //n자리 생성
    n = n + 1;
}
answer.join('');

let count = 0;
check.addEventListener('click', () => {
    const value = input.value; //문자열 ex) '3046' true truthy
    // 0, '', NaN, false, null, undefined -> falsy value
    if (value && value.length === 4) { // 앰퍼센드 AND 연산자 / 보호연산자
        if (answer === value) {

        }
    }
    console.log(value)
});