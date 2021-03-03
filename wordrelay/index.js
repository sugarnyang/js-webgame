const btn = document.querySelector('#button');
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.
btn.addEventListener('click', () => {
    const word = document.querySelector('#word').textContent;
    const input = document.querySelector('#input').value;
    const lastIndex = word.length - 1;
    const w = word[lastIndex]; //끝글자
    const i = input[0]; //첫글자
    
    // 값이 같은가는 === 이다. 
    if (w === i) { // 같으면
        document.querySelector('#word').textContent = input;
        // 제시어 칸의 textContent에 input값을 넣어준다.
        
        document.querySelector('#error').textContent = ''; //빈칸으로 만들어준다.
        document.querySelector('#input').value = ''; //input은 value

        document.querySelector('#input').focus(); //깜빡깜빡

    } else {
        document.querySelector('#error').textContent = '땡';
        
        document.querySelector('#input').value = '';

        document.querySelector('#input').focus(); //깜빡깜빡

        
    }
})