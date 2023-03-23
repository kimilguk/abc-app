class AppState {
    count = 0; // static 아닐 때 사용
    static count = 0;
    constructor() {
        this.count = this.count + 1; // static 아닐 때 사용
        AppState.count = AppState.count + 1; // 객체가 만들어진 횟수 누적, 직접접근
    }
}
const object1 = new AppState();
const object2 = new AppState();
console.log(object2.count); // static 아닐 때 사용. 참고로, 자바 언어에서는 사용가능하다.
console.log(AppState.count); // static 을 사용할 때 객체에 직접 접근 가능
// --------- 싱글톤 클래스 사용
class AppState2 {
    static count = 0;
    private static instance: AppState2; // undefined인 싱글톤 변수 생성. static이라서 직접접근
    private constructor() {
        AppState2.count = AppState2.count + 1; // 객체가 만들어진 횟수 누적, 직접접근
    }
    static getInstance(): AppState2 { // 싱글톤 구현 메서드
        if(AppState2.instance === undefined) { // 이 조건이 없으면, 일반 클래스와 같은 결과임
            AppState2.instance = new AppState2(); // 객체화된 싱글톤 변수 생성
        }
        return AppState2.instance;
    }
}
// const object3 = new Singleton(); // private 생성자라서 외부에서 객체생성 불가하다.
const object4 = AppState2.getInstance(); // 객체 생성
const object5 = AppState2.getInstance(); 
console.log(AppState2.count); // static 을 사용할 때 객체에 직접 접근 가능
export default AppState; // AppState를 외부 모듈에서 사용가능하게 export 한다.(기본서식)