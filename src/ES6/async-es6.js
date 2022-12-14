//비동기로 사용할 함수는 람다식을 사용하여 Promise 객체를 반환하는 함수를 만든다.
const work1 = (onDone) => {
    onDone('작업1 완료!');//
};
const work2 = () =>
new Promise((onDone) => {
    setTimeout(()=>onDone('msg2 완료!'), 2000);//2초 후에 콜백함수(자동실행) 실행
});
const work3 = () => 
new Promise((onDone) => {
    setTimeout(()=>onDone('msg3 완료!'), 3000);//3초 후에 콜백함수(자동실행) 실행
});
const doIt = (onDone) => {
    onDone('=비동기Async 로 실행!');
};
//아래 work1->work2->work3->doIt 처럼 호출 순서대로 실행되지 않는다.
//단, 내부 (work2->work3)는 동기Sync로 실행됨.
work1((msg1) => {
        var sum = 0;
        for(let i = 1; i <= 100; i++) { sum = sum + i; }
        console.log(sum + msg1);
    });
work2()
    .then( (msg2) => {
        console.log('2초 후에 ' + msg2);
        return work3();
    })
    .then( (msg3) => {
            console.log('3초 후에 ' + msg3);
    });
doIt((msg) => {
    console.log('work1,2,3보다 나중에 호출 되었으나 실행완료는 먼저 된다.' + msg);
});
//핵심은 Promise 로 비동기 함수 객체를 생성하고, 호출할 때는 then 함수를 사용하면 코드가독성이 좋아진다.