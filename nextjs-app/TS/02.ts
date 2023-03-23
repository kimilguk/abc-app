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
// 대부분의 클래스에서 공통으로 사용할 항목을 만든다. 예, 등록,수정 날짜
abstract class CommonClass {
    // insertDate: Date = new Date(); // 초기값으로 현재 날짜를 입력
    // updateDate: Date | undefined; // 변수에 메모리 할당 없이도 진행 = updateDate?: Date
    insertDate: Date = new Date(Date.now() + 9 * (60 * 60 * 1000)); // UTC로 표시가 되어서 9시간 추가
    updateDate!: Date; // 초기값 없이 변수 선언 !(할당 어설션=값이 없더라도 에러없이 진행)
    abstract updateMember(login_id: Id, login_pw: password, new_pw: password):void;
}
// class 키워드(예약어)로 커스텀 타입 정의, 자바나 C#에 같은 기능이 있다.
class MemberClass extends CommonClass {
    
    private _name: string;    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    login_id: Id;
    login_pw: password;
    age?: number; // member 객체를 사용할 때 ?로 age를 입력하지 않고, null 을 허용한다.
    // constructor(name: string,login_id: Id,login_pw: password);
    // constructor(name: string,login_id: Id,login_pw: password,age:number);
    constructor( // 클래스 생성자 추가. new 키워드로 객체를 만들 때 자동 실행된다.
    name: string,
    login_id: Id,
    login_pw: password,
    age?: number // member 객체를 사용할 때 ?로 age를 입력하지 않고, null 을 허용한다.
    ){
        super();
        this._name = name;
        this.login_id = login_id;
        this.login_pw = login_pw;
        this.age = age;
    }
    updateMember(login_id: string, login_pw: string, new_pw: string):void;
    updateMember(login_id: string, login_pw: string, new_pw: string, age: number):void;
    updateMember(login_id: string, login_pw: string, new_pw: string, age?: number): void {
        if(this.login_id == login_id && this.login_pw == login_pw) {
            console.log('인터페이스 실행 중...')
            this.login_pw = new_pw;
            // this.updateDate = new Date(); // 수정 당시 시간을 입력
            this.updateDate = new Date(Date.now() + 9 * (60 * 60 * 1000)); // UTC로 표시가 되어서 9시간 추가
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
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone); // 현재 작업PC의 타임 존 확인
export {}