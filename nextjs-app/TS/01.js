"use strict";
exports.__esModule = true;
var user_id;
user_id = "123";
console.log(user_id);
function getAdd(x, y) {
    return x + y;
}
const logger = () => {
    let cnt = 0;
    while (true) {
        console.log('서버가 실행 중 입니다.');
        cnt++;
        if (cnt > 5) break;
    }
};

console.log(typeof (logger())); // undefined 타입을 반환
console.log(typeof(getAdd(10, 20))) 