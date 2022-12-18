//http://app.time-space.biz/ 교수의 개임 사이트에서 
//크롬 F12-개발자도구 Console 화면에서 실행한다.
function Throttle(func, delay) {
    console.log('이 스크롤링 응답함수는 1번만 실행된다.');
    let lastFunc; //대기 콜백함수
    let lastRunDate;//마지막 실행 시간
    return function(...args) {
        const context = this;
        if(!lastRunDate) {
            lastRunDate = Date.now();
            func.call(context, ...args);
        }else{
            if(lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(
                () => {
                    if(Date.now()-lastRunDate > delay) {
                        func.call(context, ...args);
                        lastRunDate = Date.now();
                    }
                }, delay - (Date.now()-lastRunDate) //콜백함수
            );
        }
    }
}
var checkPositon = () => {
    const offset = 22; //웹브라우저 하단에서 22픽셀 떨어진 지점변수
    const currentScrollPosition = window.pageYOffset;
    const pageBottomPosition = document.body.offsetHeight-window.innerHeight-offset;
    if(currentScrollPosition>=pageBottomPosition) {
        console.log('다음 페이지 로딩');
    }
};
var infiniteScroll = Throttle(checkPositon, 500);
window.addEventListener('scroll', infiniteScroll);