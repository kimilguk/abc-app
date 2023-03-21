function paddingLeft(value: string, padding: string | number): string | undefined {
    if (typeof (padding) === "number") { // 변수 타입을 확인 하는 typeof() 함수를 사용한다.
        return Array(padding + 1).join(" ") + value;
    } else if (typeof (padding) === "string") {
        return padding + value;
    }
}
console.log(paddingLeft("Hello world", 5))
console.log(paddingLeft("Hello world", "Kimilguk say "))
//type 키워드(예약어)로 커스텀 타입 정의
type Id = string;
type password = string;
type MemberType = {
    name: string,
    login_id: Id,
    login_pw: password,
    age?: number // member 객체를 사용할 때 ?로 age를 입력하지 않고, null 을 허용한다.
}
let member: MemberType = { // 회원 가입 받을 때 age 는 필수 값이 아니라고 가정한다.
    name: 'kimilguk',
    login_id: 'kimilguk@emai.com',
    login_pw: '1234'
}
console.log(typeof member, member, member.name)
//class 키워드(예약어)로 커스텀 타입 정의, 자바나 C#에 같은 기능이 있다.
class MemberClass implements MemberInterface {
    name: string;
    login_id: Id;
    login_pw: password;
    age?: number; // member 객체를 사용할 때 ?로 age를 입력하지 않고, null 을 허용한다.
    constructor( // 클래스 생성자 추가. new 키워드로 객체를 만들 때 자동 실행된다.
    name: string,
    login_id: Id,
    login_pw: password,
    age?: number // member 객체를 사용할 때 ?로 age를 입력하지 않고, null 을 허용한다.
    ){
        this.name = name;
        this.login_id = login_id;
        this.login_pw = login_pw;
        this.age = age;
    }
    updateMember(login_id: string, login_pw: string, new_pw: string): void {
        if(this.login_id == login_id && this.login_pw == login_pw) {
            console.log('인터페이스 실행 중...')
            this.login_pw = new_pw;
        }
        // throw new Error("Method not implemented.");
    }
}
const memberObject = new MemberClass("kimilguk","kimilguk@email.com","1234");
console.log(typeof memberObject, memberObject, memberObject.name)
// interface 키워드(예약어)로 커스텀 타입 정의,
interface MemberInterface {
    updateMember(login_id: Id, login_pw: password, new_pw: password):void;
}
// 자바나 C#에 같은 기능이 있지만, 사용하는 방법과 의미가 틀리다. 자바라면 아래처럼
// let memberInterface:MemberInterface;
// memberInterface.updateMember('kimilguk@email.com','1234','4321');
memberObject.updateMember('kimilguk@email.com','1234','4321');
console.log(typeof memberObject, memberObject, memberObject.name)
export { }