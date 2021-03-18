const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = [];
let n = 0;
while (n <= 3) {
    const index = answer[n] = Math.floor(Math.random() * (10 - n)); // 0 ~ 9 정수
    answer.push(numbers[index]);
    numbers.splice(index, 1);
    n += 1;
}
console.log(answer);

let count = 0;
check.addEventListener('click', () => {
    const value = input.value; //문자열 ex) '3046' true truthy
    // 0, '', NaN, false, null, undefined -> falsy value
    if (value && value.length === 4) { // 앰퍼센드 AND 연산자 / 보호연산자
        if (answer.join('') === value) {
            logs.appendChild(document.createTextNode('HR'));
        } else {
            console.log('다르다')
        }
    }
    console.log(value)
});