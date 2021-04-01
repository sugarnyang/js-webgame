const candidate = Array(45).fill().map((v, i) => i + 1)
const shuffle = [];
while (candidate.length > 0) {
    const value = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];

    /*
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(candidate.splice(random), 1);
    const value = spliceArray[0];
    */

    shuffle.push(value);
}
console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((p, c) => p - c);
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);

const resultTag = document.querySelector('#result');
// for (let i = 0; i < 6; i++) { // 클로저 문제 (초보자들에게 악명높은 문제. let 나오면서 문제는 사라졌다.)
//     setTimeout(() => {
//         const ball = document.createElement('div');
//         ball.className = 'ball';
//         colorize(winBalls[i], ball);
//         ball.textContent = winBalls[i];
//         resultTag.appendChild(ball);
//     }, 1000 * (i + 1)); // 1초 뒤에 이 동작을 해라.
// }
/*
    일반 공추첨 new 방법
    for문 말고 forEach를 사용해서 배열에 있는 공을 뽑아도 된다.
    forEach는 1,2,3,4 그냥 훑고 지나가는 단순 반복에 초점이 맞추어져 있어서.
    1대1로 매핑하는게 없다면 forEach를 쓰고, 
    반복하면서 매핑도 하고싶으면 map을 쓰면 된다.
    코드에 return이 있으면 map을 쓰는게 좋고
    없으면 forEach를 써서 반복하는게 좋다.
*/
winBalls.forEach((number, index) => {
    // 배열에 대한 특수한 반복문. 하나하나씩 다 실행해주는.
    setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        colorize(number, ball);
        ball.textContent = number;
        resultTag.appendChild(ball);
    }, 1000 * (index + 1));
})

const bonusTag = document.querySelector('#bonus');
setTimeout(() => {
    const bonusBall = document.createElement('div');
    bonusBall.className = 'bonusBall';
    bonusBall.textContent = bonus;
    colorize(bonus, bonusBall);
    bonusTag.appendChild(bonusBall);
}, 7000);

function colorize(number, tag) {
    if (number <= 10) {
        tag.style.backgroundColor = 'gold';
    } else if (number <= 20) {
        tag.style.backgroundColor = 'skyblue';
    } else if (number <= 30) {
        tag.style.backgroundColor = 'coral';
    } else if (number <= 40) {
        tag.style.backgroundColor = 'thistle';
    } else {
        tag.style.backgroundColor = 'yellowgreen';
    }
}

/*
    fill을 해야 45개의 숫자가 생김
    없으면 length는 45인데 empty*45로 생김
    fill이 있으면 undefined가 45개가 생김
    Array(45).fill('1') 하면
*/
/*
    map 1대 1의 개념
    map이라는 메서드
    const arr = [1, 2, 3];
    예시: arr.map((매개변수_이름아무거나 a) => { return a * 10 })
    1대 1로 어떻게 바꿔줄지.
    중괄호 다음에 바로 리턴이 나오면 중괄호를 빼줘도 됨.
    매개변수도 하나밖에 없으면 소괄호 빼줘도 됨.
    예시: arr.map(a => a * 10)
    map은 지도인데, 저 대상과 지도위에 한 점으로 1대1 매칭을 해둔것.
*/
/*
    function add(a, b) {}
    const add = (a, b) => {}
    같은 방식.

    함수선언문(옛날방식)
    function add(a, b, c) {
        a + b + c
    }

    화살표방식
    const add = (a, b, c) => {
        return a + b + c
    }
    리턴을 해줘야지 함수의 결과값이 나온다.

    값은 여러개를 받을 수 있는데, 결과는 하나만 내보낼 수 있다.
    자바스크립트에서 함수라고 정의하는 것.
    한번 만들어두면 여러번 사용할 수 있다.
    다른 변수에 저장해둘수도 있다.
    함수는 어떤 동작을 의미하면서, 중복을 줄여주는 역할.

    Array(45).fill(1).map(v => v + 2)
    (45) [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]

    fill을 빼고 map만 쓰면
    (45) [empty × 45]
    로 된다. 이건 Array(45)를 먼저 선언해서 fill을 꼭 썼어야 하는거임.

    1부터 45까지는 어떻게 만들까
    어떤 값의 자리수를 다른수로 매핑해줄수가 있다.
    Array(45).fill().map((v, i) => i) v는 어떤 값, i는 자리수.
    Array(45).fill().map((v, i) => i + 1)
    (45) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

    함수를 실행한다를 호출이라고 한다.
    함수의 매개변수는 순서를 바꿀수가 없다.

    1부터 어떤 범위의 수를 만들때
    Array(45).fill() 을 자주 쓴다.
    파이썬에서는 range라는게 있는데
    자바스크립트에는 그런게 없기 때문에
    위와같은 식을 자주 쓴다.

    매개변수가 두개 이상인 경우 소괄호는 필수로 감싸줘야한다.
    그리고 중괄호 안에로 리턴까지 적어줘야하는데
    => 이 화살표 다음에 바로 리턴할 값이 나오면 중괄호와 리턴을 생략가능하다.
*/
/*
    로또니까 7개를 뽑아야하는데
    숫자야구 할때처럼 Math.random 로 뽑아도 되는데
    이건 10개를 한번에 뽑아놓고 하나씩 뽑아서 옮겼다.
    이번에는 처음부터 먼저 섞고 앞에것 7개 가져오면 그것도 랜덤하게 섞은것.

    중간값을 가져오는 것을 splice.
    splice 를 하면 배열에 담겨져서 나온다.
    여러개를 꺼낼 수 있기 때문에
    <- [1, 2, 3].splice(1, 2)
    -> [2, 3]
*/
/*
    sort는 숫자 순서대로 정렬해주는게 아니라 사전에서 찾듯 정렬한다.

    const winBalls = shuffle.slice(0, 6).sort((p, c) =>{
        return p - c;
    });
    return 값이 0보다 크면 자리를 바꾼다. 오름차순 정렬이 되었다.

    return c - p; 로 바꾸면 내림차순이 되겠다.

    맨 앞에서부터 순서대로 정렬을 하는건 아니고
    브라우저별로 실행 순서는 다르다.
*/
/*
    웹에서는 리셋이 새로고침이라고 생각하면 된다.
*/
/*
    ~로또 강의 정리~
    1. setTimeout. 나중에 실행된다. 비동기.
    2. 함수 자체, 매개변수-파라미터, 아규먼트-인수
    3. 피셔 예이츠 알고리즘 방식 (랜덤 정렬이 필요할 때마다 사용되는 유용한 알고리즘)
    4. 함수로 중복을 제거하는 방법 (colorize)
    5. javascript.info 읽으면서 강좌 함께 보기
*/
/*
    실시간질문1 -> 비동기를 다룰때는 map을 쓰지 않느냐?
    답-> map 과 forEach 둘의 문제는
    동기냐 비동기냐의 문제는 아니고
    return 값이 있냐 없냐이다.
    물론 map써도 문제는 없는게 함수는 항상 return undefined가 마지막에 위치하는데
    생략할 수 있어서 생략하는것.
    위에서는 forEach가 더 맞다고 생각해서 사용했고, 
    꼭 비동기면 map을 써야한다는 아니다.
    그런데 비동기와 반복문이 같이나올때는 코딩할때 주의가 필요하다.
    Promise쓸때 맵은 Promise.all쓸때 맵은 안된다???
    아래와 같은 경우에는 리턴값이 있어야하니까
    map을 사용한다. 그다음에 이어서 await같은걸 쓸 수 있기 때문에.
    [1, 2, 3].map((v) => {
        return Promise.resolve(v);
    })
    Promise.allSettled(promises);
    promise를 리턴해줘야 다음에 await을 해줄수있으니까


    실시간질문2 -> React 하기전에 TS하는게 좋을까요?
    답-> 리액트 먼저하고 타입스크립트는 나중에 해라.
    리액트 하기전에 ts 먼저하면 헷갈릴것같음.
    리액트 먼저하는것을 추천.
    하지만 둘은 연관성이 없어서 뭘 먼저 배워도 상관은 없다.
    굳이 리액트를 배우려고 타입스크립트를 배울 필요는 없다.
    사회랑 과학의 느낌이라서 먼저 배워도 상관은 없으나
    같이 배워도 되는데 사회를 먼저 배워야
    과학을 배울수 있고 그런건 아니잖아요?
    그런 관계. 그렇게 보시면 될 것 같습니다.
 */
/*
    댓글 질문 -> 클로져 문제가 어떻게 사라진건지 궁금합니다.
    for(let i=0; i<6; i++){
    setTimeout(()=>{
        ~~~~~~
        ball.textContent =  winBalls[i];
    },1000 * i+1); 
    }

    클로져문제가 let을 사용하므로써 없어졌다고 하셨는데 궁금점이 있습니다.
    let 이라는게 함수가 종료되고 그 함수가 끝나면 사라진다고 하셨습니다.

    그럼 for문이 돌면서

    setTimeout(()=>{
        ~~~~~~
        ball.textContent =  winBalls[i];
    },1000 *1); 
    setTimeout(()=>{
        ~~~~~~
        ball.textContent =  winBalls[i];
    },1000 *2); 
    setTimeout(()=>{
        ~~~~~~
        ball.textContent =  winBalls[i];
    },1000 *3); 
    setTimeout(()=>{
        ~~~~~~
        ball.textContent =  winBalls[i];
    },1000 *4); 

    이런식으로 먼저 돌고 실행대기중인 상태가 된다고 알고있습니다.
    다돌고나서 for문이 끝났고 그럼 let도 사라진 상태가 되는데
    setTimeout이 이제 실행되면서 콜스텍이 들어오면
    이미 i는 for문이 끝남과 동시에 사라진게 되는걸텐데 그럼 아예 동작이 않되어야하는거 아닌가요?
    어떤 원리로 가게되는지 궁금합니다.

    답 -> 자바스크립트에는 스코프라는 것이 있습니다. 변수와는 조금 다른 개념입니다. 
    var을 쓸 때는 함수 스코프여서 함수 단위로 스코프가 생성되지만 let이나 const는 블록 스코프여서 {} 단위로 생성됩니다. 
    한 번 생성된 스코프는 참조하고 있는 것이 존재하는 한 메모리에 계속 남아있습니다. 
    i 변수는 사라져도 i 변수를 참조하는 스코프는 남아있습니다. winBalls[i]에서 i는 남아있는 블록스코프의 i를 참조합니다. 
    let 대신에 var을 쓰는 경우 var은 함수 스코프라 for문의 {}가 스코프가 되는 것이 아니라 더 위에 함수가 스코프가 되고, 
    그 스코프 안에서 var은 계속 변하다가 6이 되어버립니다. let을 쓴다면 반복문을 돌 때 변수 하나 하나가 스코프를 생성하므로 
    하나의 값으로 고정됩니다.
    아마 글로 보시면 이해가 안 되실 것 같네요. 제 블로그 스코프 글과 const, let 글을 참조하시는 게 좋을 것 같습니다.
 */