const computerTag = document.querySelector('#computer');
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let coord = '0';
const rspCoord = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px'
};
setInterval(() => {
    if (coord === rspCoord.rock) {
        coord = rspCoord.scissors;
    } else if (coord === rspCoord.scissors) {
        coord = rspCoord.paper;
     } else if (coord === rspCoord.paper) {
        coord = rspCoord.rock;
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${coord} 0`;
}, 50);

/*
    자바스크립트는 위에서 아래로 시작되는데
    나중에 실행되는 코드들도 있다.
    이런것들을 비동기라고 했다.

    나중에 실행되는 비동기 코드들은
    클릭했다거나 유저 이벤트가 발생했을때,
    인터벌 등이 있다.
 */
/*
    rspCoord['rock']
    rspCoord.rsp // rspCoord['rsp']
    둘은 완전 다름.

    document도 객체였다!
    const document = {
        querySelector: () => {} 
    };
    이렇게 표현할 수 있었다.
    중괄호 안에있는건 속성이라고 한다.

    배열은 객체의 일종
    객체를 쓰는 이유는 변수들을 그룹화 하기 위해서.
 */