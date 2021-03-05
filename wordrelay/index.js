const button = document.querySelector('#button');
// document.querySelector(아이디)는 그 아이디의 태그를 가져온다.

const dictionary = [];
button.addEventListener('click', () => {
    const wordTag = document.querySelector('#word');
    const inputTag = document.querySelector('#input');
    const errorTag = document.querySelector('#error');

    const word = wordTag.textContent;
    const input = inputTag.value;

    if (dictionary.includes(input)) {
        errorTag.textContent = '중복입니다';

    } else {
        // 값이 같은가는 === 이다. 
        if (word[word.length - 1] === input[0]) { // 같으면
            // 제시어 칸의 textContent에 input값을 넣어준다.
            wordTag.textContent = input;
            errorTag.textContent = 'error view'; //빈칸으로 만들어준다.
            inputTag.value = ''; //input은 value
            inputTag.focus(); //깜빡깜빡
            dictionary.push(input);
            document.querySelector('#dictionary').textContent = '나온 단어: ' + dictionary;
        } else {
            errorTag.textContent = '땡';
            inputTag.value = '';
            inputTag.focus(); //깜빡깜빡
            document.querySelector('#dictionary').textContent = '나온 단어: ' + dictionary;
        }
    }

    
})