const computerTag = document.querySelector('#computer');
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let computerChoice = 'rock';
const rspLatitude = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px'
};
setInterval(() => {
    if (computerChoice === 'rock') {
        computerChoice = 'scissors';
    } else if (computerChoice === 'scissors') {
        computerChoice = 'paper';
     } else if (computerChoice === 'paper') {
        computerChoice = 'rock';
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspLatitude[computerChoice]} 0`;
}, 500);

const rockTag = document.querySelector('#rock');
const scissorsTag = document.querySelector('#scissors');
const paperTag = document.querySelector('#paper');

// 가위: 1, 바위: 0, 보: -1
/*  규칙 찾기 표
    나\컴퓨터   가위    바위    보
      가위      0     1     2
      바위      -1    0     1
      보       -2    -1     0
*/
const score = {
    rock: 0,
    scissors: 1,
    paper: -1,
};

rockTag.addEventListener('click', () => {
    const myScore = score.rock;
    const computerScore = score[computerChoice];
    const diff = myScore - computerScore;
    const scoreTag = document.querySelector('#score');
    let addScore = Number(scoreTag.textContent);
    if (diff === 2 || diff === -1) {
        addScore += 1;
    } else if (diff === -2 || diff === 1) {
        addScore -= 1;
    }
    scoreTag.textContent = addScore;
});
scissorsTag.addEventListener('click', () => {
    const myScore = score.scissors;
    const computerScore = score[computerChoice];
});
paperTag.addEventListener('click', () => {
    const myScore = score.paper;
    const computerScore = score[computerChoice];
});

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