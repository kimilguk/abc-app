class Circle {
    PI = 3.14; //클래스 전역변수 추가
    constructor(radius) {
        //var _this = this; //bind함수 없이 사용가능하려면 추가한다.
        var area = function() { //익명함수는 현재 클래스와는 별개의 프로그램이다.
            return radius * radius * this.PI; 
        }.bind(this);//익명함수 내부에서는 클래스변수에 접근할 수 없다. 그래서 bind가 필요
        console.log(area()); 
        var area = () => radius * radius * this.PI;//람다식에서는 bind가 필요없다.
        console.log(area());
    }
} //반지름이 5인 원 객체 생성(아래)
var c = new Circle(5);