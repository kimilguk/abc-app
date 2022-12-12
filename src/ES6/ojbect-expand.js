//ES5에서 json 객체에 값 추가(아래)
var x = 0, y = 0;
var es5 = {
    x: x, //아이템 키 이름과 값의 변수명이 동일 할 때
    y: y,
    funcA: function() { return 0; }, //변수에 익명함수를 할당
}; 
//ES6에서 json 객체에 값 추가(아래)
var es6 = { 
    x, //아이템 키 이름과 값의 변수가 동일 할 때 값 변수 생략 가능
    y,
    funcA() { return 0; }, //function 예약어 생략가능
};
console.log(es5['x']==es6['x'], es5.funcA()==es6.funcA()); //객체 값 비교

var nowMilliseconds = new Date().getTime();
//console.log(nowMilliseconds);//타임스탬프?1970.1.1 이후 현재까지의 총 초 수
//es5 객체 외부에서만 키 이름을 동적으로 추가 가능하다.(아래)
var es5 = { //객체 생성
    a: 1,
}; 
es5['one' + nowMilliseconds] = '객체 키:값'; //객체 외부에서 아이템 추가
//es5[`one${nowMilliseconds}`] = '객체 키:값'; //백 쿼트로 템플릿 스트링사용 동일
//es6 에서 객체 내부에서도 키 이름을 동적으로 추가 가능하다.(아래)
var es6 = {
    a: 1,
    ['one' + nowMilliseconds]: '객체 키:값', //객체 내부에서 아이템 추가
};
console.log(es5['one' + nowMilliseconds]==es6['one' + nowMilliseconds]);