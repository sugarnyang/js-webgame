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