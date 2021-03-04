const btn = document.querySelector('#button');
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.
btn.addEventListener('click', () => {
    const wordTag = document.querySelector('#word');
    const word = wordTag.textContent;

    const inputTag = document.querySelector('#input');
    const input = inputTag.value;
    
    const errorTag = document.querySelector('#error');

    const lastIndex = word.length - 1;
    const w = word[lastIndex]; //끝글자
    const i = input[0]; //첫글자
    
    // 값이 같은가는 === 이다. 
    if (w === i) { // 같으면
        wordTag.textContent = input;
        // 제시어 칸의 textContent에 input값을 넣어준다.
        
        errorTag.textContent = ''; //빈칸으로 만들어준다.
        inputTag.value = ''; //input은 value

        inputTag.focus(); //깜빡깜빡

    } else {
        errorTag.textContent = '땡';
        
        inputTag.value = '';

        inputTag.focus(); //깜빡깜빡
    }
})