const calculatorButton = document.querySelector('#calculator');
const gugudanButton = document.querySelector('#gugudan');
const lottoButton = document.querySelector('#lotto');
const minesweeperButton = document.querySelector('#minesweeper');
const numberbaseballButton = document.querySelector('#numberbaseball');
const rspButton = document.querySelector('#rsp');

calculatorButton.addEventListener('click', () => {
    window.location.href = './calculator/index.html'
});

gugudanButton.addEventListener('click', () => {
    window.location.href = './gugudan/index.html'
});

lottoButton.addEventListener('click', () => {
    window.location.href = './lotto/index.html'
});

minesweeperButton.addEventListener('click', () => {
    window.location.href = './minesweeper/index.html'
});

numberbaseballButton.addEventListener('click', () => {
    window.location.href = './numberbaseball/index.html'
});

rspButton.addEventListener('click', () => {
    window.location.href = './rsp/index.html'
});