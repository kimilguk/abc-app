const varialbe = 1;
//varialbe = varialbe * 3; //Type 자료형에러 발생
const varialbe2 = '문자변수';
//varialbe2 = '문자변수값변경'; //Type 에러발생
const varialbe3 = [];
//varialbe3 = ['배열변수', 1, 2, 3]; //Type 에러발생
varialbe3.push('배열변수');
varialbe3.splice(1, 0, 1); //(시작인덱스, 삭제할 개수, 추가할 값)
//varialbe3.pop(); //pop함수로 Top 인덱스의 데이터를 삭제한다.
const arr = varialbe3.concat('배열변수',1); //배열에 값을 추가해 신규 배열 생성
const arr2 = arr.slice(0,1); //배열추출(시작인덱스,끝인텍스-1순서까지 데이터 추출)
const varialbe4 = {};
//varialbe4 = {name: '객체변수', email: 'test@test.com'};
varialbe4['name'] = '객체변수'; //key 접근으로 값을 추가가능하다.
Object.assign(varialbe4, {name:'새 이름'}); //함수로 값을 변경가능하다.
const obj = {...varialbe4, email:'test@test.com'};
console.log(varialbe, varialbe2, varialbe3, varialbe4, arr, arr2, obj);