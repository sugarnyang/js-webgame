const computerTag = document.querySelector('#computer');
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;
let coord = '0';
setInterval(() => {
    if (coord === '0') {
        coord = '-142px';
    } else if (coord === '-142px') {
        coord = '-284px';
    } else if (coord === '-284px') {
        coord = '0';
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${coord} 0`;
}, 1000);

/*
    자바스크립트는 위에서 아래로 시작되는데
    나중에 실행되는 코드들도 있다.
    이런것들을 비동기라고 했다.

    나중에 실행되는 비동기 코드들은
    클릭했다거나 유저 이벤트가 발생했을때,
    인터벌 등이 있다.
 */