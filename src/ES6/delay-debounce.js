function Debounce(func, delay) {
    console.log('이 검색어 응답함수는 1번만 실행된다.');
    let inDebounce; //대기 콜백함수
    let reply='';//누적 입력 값 변수
    return function(...args) {
        if(inDebounce) {
            console.log('입력 후  대기 중...',...args);
            clearTimeout(inDebounce); //대기함수 초기화
        }
        reply = reply + args; //입력 값 누적
        inDebounce = setTimeout(
            () => {
                console.log('1초 후 일괄전송 및 응답');
                reply=reply + '처리 후 응답'
                func(reply);
            }, delay //콜백함수
        );
    }
}
const typing = Debounce(val => console.log(val), 1000);
//검색 키보드 입력 시작
typing('a');
typing('b');
typing('c');