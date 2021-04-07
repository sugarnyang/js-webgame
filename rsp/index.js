const computerTag = document.querySelector('#computer');
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let computerChoice = 'rock';
const rspLatitude = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px'
};

const intervalMaker = () => {
    return setInterval(() => { // setInterval은 영원히 돈다
        if (computerChoice === 'rock') {
            computerChoice = 'scissors';
        } else if (computerChoice === 'scissors') {
            computerChoice = 'paper';
        } else if (computerChoice === 'paper') {
            computerChoice = 'rock';
        }
        computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspLatitude[computerChoice]} 0`;
    }, 500);
};
let intervalId = intervalMaker();

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

const clickButton = (myChoice) => () => {
    clearInterval(intervalId);
    // 고차함수. 함수가 다른 함수를 리턴한다. 중괄호 다음에 리턴이 바로오면 중괄호 생략 가능.
    // 그래서 =>가 연달아 있는것
    // 다른 함수를 리턴해야 하는 이유는 리턴받는 곳에 undified가 아니라 함수가 들어가야하기 때문.
    const myScore = score[myChoice];
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
    setTimeout(() => {
        intervalId = intervalMaker(); 
    }, 1000);
};
rockTag.addEventListener('click', clickButton('rock'));
scissorsTag.addEventListener('click', clickButton('scissors'));
paperTag.addEventListener('click', clickButton('paper'));


// 설명
const clickButton = (myChoice) => {
    // 어떤 동작
    return undefined; 리턴값이 없는 함수는 undefined가 숨어있다. 
}
rockTag.addEventListener('click', clickButton('rock'));

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