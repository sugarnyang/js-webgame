const candidate = Array(45).fill(); 
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