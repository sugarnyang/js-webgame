const calculatorButton = document.querySelector('#calculator');
const gugudanButton = document.querySelector('#gugudan');

calculatorButton.addEventListener('click', () => {
    window.location.href = './calculator/index.html'
});

gugudanButton.addEventListener('click', () => {
    window.location.href = './gugudan/index.html'
});