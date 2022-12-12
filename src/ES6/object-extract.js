//ES5 에서 배열 값 추출(아래)
var es5Array = [0,1];
var es5Item1 = es5Array[0];
var es5Item2 = es5Array[1];
var es5Item3 = es5Array[2] || -1;
//ES6 에서 배열 값 추출(아래)
var es6Array = [0,1];
var [es6Item1, es6Item2, es6Item3 = -1, ] = es6Array; //인덱스와 같은 위치의 변수에 값 추출
console.log(es5Item1==es6Item1);

//ES5 에서 변수 인덱스 자리 바꾸기(치환)
console.log(es5Item1, es5Item2);
var temp = es5Item2;
es5Item2 = es5Item1;
es5Item1 = temp;
console.log(es5Item1, es5Item2);
//ES6 에서 변수 인덱스 자리 바꾸기(치환)
[es5Item2, es5Item1] = [es5Item1, es5Item2]; 
console.log(es5Item1, es5Item2);

//ES5 에서 객체 값 추출(아래)
var es5Obj = {
    key1: 'one',
    key2: 'two',
};
var key1 = es5Obj.key1;
var newKey1 = es5Obj.key1; //신규 키 명 추가
var key2 = es5Obj['key2'];
var key3 = es5Obj.key3 || '해당 키는 없고 변수와 값만 생성';
console.log(es5Obj.key1, key1, newKey1);
//ES6 에서 객체 값 추출(아래)
var es6Obj = {
    key1: 'one',
    key2: 'two',
};
var {
    key1: newKey1, //신규 키 명 추가
    key2,
    key3 = '해당 키는 없고 변수와 값만 생성',
} = es6Obj;
console.log(es6Obj.key1, key1, newKey1);