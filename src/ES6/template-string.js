var string1 = '안녕하세요';
var string2 = '반갑습니다.';
console.log(string1+' '+string2+' 하하.');//기존 자바스크립트 코딩
//백 쿼트(백틱)으로 감싸주면 내부에 문자열과 변수를 혼합해 사용가능(아래)
console.log(`${string1} ${string2} 하하.`); //ES6 템플릿 문자열 처리

var member = {name:'김일국', email:'test@test.com'};
console.log('회원의 이름은 '+member.name+', 이메일은 '+member.email); //ES5
console.log(`회원의 이름은 ${member.name}, 이메일은 ${member.email}`); //ES6

var multiline = '라인1\n라인2'; //ES5 이스케이프(역슬레쉬)문자 사용
console.log(multiline);
var multiline = `라인1 
라인2`; //ES6
console.log(multiline);

var value1 = 1,value2 = 2;
console.log('뎃셈의 답은 '+(value1+value2)+' 이다.'); //ES5
console.log(`덧셈의 답은 ${value1+value2} 이다.`); //ES6

var boolean = false;
console.log((boolean?'참':'거짓')+' 입니다.'); //ES5
console.log(`${boolean?'참':'거짓'} 입니다.`); //ES6
//ES5 코딩(아래)
var getMember = function(member) {
    return member.name + ' 님 접속을 환영합니다.\n\t접속하신 아이디는 '+member.email+' 입니다.';
};
console.log('리액트 사이트에 '+getMember(member));
//ES6 코딩(아래)
var getMember = function(member) {
    return `${member.name} 님 접속을 환영합니다.
        접속하신 아이디는 ${member.email} 입니다.`;
};
console.log(`리액트 사이트에 ${getMember(member)}`);