//배열을 전개연산자로 처리(아래)
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
//ES5 자바스크립트로 배열 합치기, 인덱스로 합치기와 concat배열함수로 합치기
var unionArray = array1.concat(array2);
var unionArray = [array1[0], array1[1] , array2[0] , array2[1], '인덱스사용'];
console.log(unionArray);
//ES6 전개연산자 사용(아래)
var unionArray = [...array1, ...array2, '전개연산자사용'];
console.log(unionArray);

//ES5 로 배열 요소 추출하여 새로운 배열 만들기
var first = array1[0], second = array1[1];
console.log(first, second);
var [first, second] = array1; //배열값이 변수 순서대로 자동 바인딩됨
console.log(first, second);
//ES6 전개연산자 사용(아래)
var [a, ...others] = array1;
console.log(a, others);
var [a, b, ...others] = unionArray;
console.log(a, b, others);

//ES5 함수의 인자-매개변수를 사용할 때 Array.prototype.slice.call로 파싱 필요.
function func() {
    console.log(arguments); //내장된 예약어 변수
    var args = Array.prototype.slice.call(arguments);//call 한 매개변수만...
    console.log(args);
    var first = args[0];
    var others = args.slice(1, args.length); //args.length는3, 3이전까지
    console.log(first, others);
}
func(1,2,3);
//ES6 에서 함수의 인자 매개변수에 전개연산자 사용하면 파싱 불핑요.
function func(...args) {
    console.log(arguments); //내장된 예약어 변수
    //var args = Array.prototype.slice.call(arguments);//call 한 매개변수만...
    console.log(args);
    var first = args[0];
    var others = args.slice(1, args.length);
    console.log(first, others);
}
func(1,2,3);

//ES6에서 객체를 전개연산자로 처리(아래)
var object1 = {name:'김일국', email:'admin@test.com', level:0}; //json 객체는 key:value의 형태
var object2 = {name:'테스트', email:'test@test.com', level:2, commnet:'앞으로'};
var unionObject = {...object1, ...object2};
console.log(unionObject); //json의 key는 유일한 값을 갖는다.
var arrayObject = [object1, object2];
console.log(...arrayObject); //대부분의 오픈API 데이터형태가 이렇다.
var {name, level:loginLevel} = arrayObject[0]; //object1객체의 해당 키의 값만 추출할 수 있다.
console.log(name, loginLevel); //참고로, 배열은 키가 없이 인덱스 순서만 맞으면 변수명은 관계없다.