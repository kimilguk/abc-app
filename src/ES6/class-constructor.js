//Shape도형 부모 클래스(아래)
class Shape { //Shape 클래스용 생성자 함수 생성
    name = 'Shape'; //도형의 객체이름 지정
    constructor(x, y) {
        this.move(x,y);
        
    }; //도형의 원점 구하기 함수이름 지정
    move(x,y) { this.x = x; this.y = y; } //원점이동 초기화 구현 this는Shspe이다
    area() { return 0 } //넓이 구하는 함수 초기화
}
var s = new Shape(2, 3); //new 생성자 함수로 Shape 객체생성
console.log(s.area()); //넓이 초기값 0
//Circle원 자식클래스로 확장한다.(아래)
class Circle extends Shape{ //Circle 클래스용 생성자 함수 생성
    name = 'Circle'; 
    constructor(x, y, radius) {
        super(x, y); //부모 클래스의 변수를 초기화 한다.
        this.radius = radius; //이 클래스전용 변수를 초기화 한다.
    }
    area() { //Shape 클래스를 상속한 area를 재정의 해서 구현한다.
        return this.radius * this.radius * Math.PI; //반지름의제곱*파이(약3.14)
    }
}
var c = new Circle(0,0, 10); //new 생성자 함수로 Circle 객체생성
console.log(c.area());