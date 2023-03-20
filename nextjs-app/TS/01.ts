let user_id: any // 초기값 없이 변수를 선언하면 any 타입과 같다.
// let user_id = 123 으로 선언함녀, user_id: number 타입과 같다.
user_id = "123"; // any 타입을 사용하면, 타입 종류에 상관없이 사용
console.log(user_id);
user_id = 123
console.log(user_id);
function getCalc(type:string, x:number, y:number):number {
    if(type == "+") {
        return x + y;
    }else if(type == "-") {
        return x - y;
    }else if(type == "*") {
        return x * y;
    }else if(type == "/") {
        return isFinite(x/y)?x/y:0;
    }
    return 0;
}
console.log(isFinite(10/0))
console.log(getCalc("+", 10, 20) + 1)
console.log(getCalc("-", 10, 20) + 1)
console.log(getCalc("*", 10, 20) + 1)
console.log(getCalc("/", 10, 0) + 1) // 잘못된 연산도 실행된다. isFinite(체크)
// 단, 자바나 C같은 언어의 경우 어떤 수를 0으로 나누게 되면 에러가 발생된다.
console.log(getCalc("A", 10, 20) + 1) // 없는 연산도 실행된다. isNaN(체크)
// Infinity와 NaN은 미리 정의된 변수로 Infinity는 무한대이며 
// NaN은 숫자가 아닌 값(Not a Number)를 표현
// 고유한 주문번호를 갖는 주문서 객체를 생성
const order = Symbol('orderID'); //객체의 키로 사용할 심볼 변수
const myOrder = {
    order: "123", // myOrder 객체의 속성으로 심볼을 사용
}
console.log(myOrder['order']);
console.log(typeof(order));
// never 타입 : 반환 값이 undefiend인 함수
const logger = () => {
    let cnt = 0;
    while(true) {
        console.log('서버가 실행 중 입니다.');
        cnt++;
        if(cnt > 5) break;
    }
};
console.log(typeof(logger())); // undefined 타입을 반환
console.log(typeof(getCalc('+', 10, 20))) // number 타입을 반환
export {}