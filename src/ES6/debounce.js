function Debounce(func, delay) {
    let inDebounce; //대기-지연시간 콜백함수
    return function(...args) {
        if(inDebounce) {
            clearTimeout(inDebounce); //대기함수 초기화
        }
        inDebounce = setTimeout(
            () => func(...args), delay //콜백함수
        );
    }
}
const typing = Debounce(val => console.log(val), 1000);
//실행 시작(키보드 입력시작)
typing('a');
typing('b');
typing('c');
typing('abc');