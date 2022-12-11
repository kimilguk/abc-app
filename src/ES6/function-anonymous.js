function add(first, second) { //고전적인 함수명으로 생성
    return first+second;
}
console.log(typeof(add));
console.log(add);
var add = function(first, second) { //익명함수로 변수 생성
    return first+second;
}; //보통 변수선언 구문 마지막에 세미콜론; 을 추가
console.log(typeof(add));
console.log(add);