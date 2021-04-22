const calculatorButton = document.querySelector('#calculator');
const gugudanButton = document.querySelector('#gugudan');
const lottoButton = document.querySelector('#lotto');
const minesweeperButton = document.querySelector('#minesweeper');

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