//비동기로 사용할 함수는 setTimeout 처럼 지연 대기 함수를 사용
function work1(onDone) {
    onDone('작업1 완료!');//
}
function work2(onDone) {
    setTimeout(()=>onDone('msg2 완료!'), 2000);//2초 후에 콜백함수(자동실행) 실행
}
function work3(onDone) {
    setTimeout(()=>onDone('msg3 완료!'), 3000);//3초 후에 콜백함수(자동실행) 실행
}
function doIt(onDone) {
    onDone('=비동기Async 로 실행!');
}
//아래 work1->work2->work3->doIt 처럼 호출 순서대로 실행되지 않는다.
//단, 내부 (work2->work3)는 동기Sync로 실행됨.
work1(function (msg1) {
    var sum = 0;
    for(let i = 1; i <= 100; i++) { sum = sum + i; }
    console.log(sum + msg1);
    work2(function(msg2) {
        console.log('2초 후에 ' + msg2);
        work3(function(msg3) {
            console.log('3초 후에 ' + msg3);
        });
    });
});
doIt(function(msg) {
    console.log('work1,2,3보다 나중에 호출 되었으나 실행완료는 먼저 된다.' + msg);
});