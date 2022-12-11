var add = (first, second) => { //익명함수를 람다식으로 변경
    return first+second;
}; //보통 변수선언 구문 마지막에 세미콜론; 을 추가
var add = (first, second) => first+second; //return 까지 생략가능하다.
console.log(typeof(add));
console.log(add);
var addMultiply = (first, second) => ({ //json 객체Object type으로 반환한다.
    add: first+second,
    multiply: first*second,
});
console.log(addMultiply(2,3));
//계단형 함수를 람다 식으로 구현(아래)
//계단 형 함수 서식(아래)
function userFormula(x,y) {
    var r = x+y;
    return function(z) {
        return r*z;
    };
}
console.log(userFormula(1,2)(10));
//계단 형 함수를 람다 식으로 구현
var userFormula = (x,y) => z => (x+y)*z;
console.log(userFormula(1,2)(10));