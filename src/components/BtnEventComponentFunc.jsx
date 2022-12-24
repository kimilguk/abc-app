import React, { useEffect, useState } from 'react';

function BtnEventComponentFunc(props) {
    /*state 상태객체 대신 리액트에 내장된 useState 함수를 사용하고,
    componentWillMount() 생명주기 함수 대신에 useEffect() 함수를 사용한다.*/
    const [state,setState] = useState({count:props.count});
    const clickEvent = () => {
        //state 변경 let count = this.state.count;
        setState(prevState => ({
            count: prevState.count+1,
        }));
    }
    useEffect(()=>{
        console.log('순서:useEffect', props.count);
        setState({count: props.count});//수정
    },[props.count]);//전송 받는 props.count 속성 값이 변경 될 때 setState함수로 변경된 값이 화면이 재생 된다.
    return (
        <div>
            <p>카운트: {state.count}</p>
            <button onClick={clickEvent}>카운트 증가</button>
        </div>
    );
}

export default BtnEventComponentFunc;