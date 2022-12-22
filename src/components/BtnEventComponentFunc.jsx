import React, { useEffect, useState } from 'react';

function BtnEventComponentFunc(props) {
    //state예약어대신 useState함수로 변수초기화(아래)
    const [state,setState] = useState({count:0});
    const clickEvent = () => {
        //state 변경 let count = this.state.count;
        setState(prevState => ({
            count: prevState.count+1,
        }));
    }
    useEffect(()=>{
        
    },[]);//componentWillMount() == ,[] 두번째 인자는 기능이 같다. 즉, 1번만 실행
    return (
        <div>
            <p>카운트: {state.count}</p>
            <button onClick={clickEvent}>카운트 증가</button>
        </div>
    );
}

export default BtnEventComponentFunc;