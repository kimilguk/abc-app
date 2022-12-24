import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function ChildComponent(props) {
    //생성자 대신에 아래 useState함수로 state객체를 초기화
    //내장된 state예약변수 대신 useState함수로 변수초기화(아래)
    const [state,setState] = useState({loading:true,formData:'no data'});
    function clickEvent() {
        const data = 'new data';
        const {formData} = state;//초기formData변수만 바인딩
        //setState()리액트 내장함수로 state 변경
        setState({
            loading: false,
            formData: data + formData,
        });
        //this.state.loading은 현재 true 이다. 클래스가 아니라서 this가 필요없다.
        //this.clickEvent = this.clickEvent.bind(this);
        console.log('loading 변수값', state.loading);
        //이후 호출될 render() 함수에서 this.state.loading은 false로 동기화된다.
    }
    useEffect(()=>{
        //4초 후에 clickEvent 함수를 호출(아래)
        setTimeout(clickEvent, 4000);
    },[]);//componentWillMount() == ,[] 두번째 인자는 기능이 같다. 즉, 1번만 실행
    //[state] state가 변경 될 때마다 즉, 4초마다 실행된다.(변경 의존 조건이라한다.)
    const {
        name, boolValue, numValue, arrayValue, objValue, nodeValue, funcValue,
    } = props;
    const message = boolValue?'불린 값 있음':'불린 값 없음';
    return (
        <div>
            {/*주석,state 데이터는 this.state로 접근 가능하다.*/}
            <p>
                로딩중: {String(state.loading)}
                결과: {state.formData}
            </p>
            기준 함수 컴포넌트 추가 {name}<br/>
            {message} {numValue}<br/>
            {arrayValue} {objValue.id}<br/>
            {nodeValue} {funcValue(5,5)}
            {props.children} {/*함수형 컴포넌트에서는 this 가 사용되지 않는다*/}
        </div>
    );
}
//자료형을 선언하는 코드(아래)
ChildComponent.propTypes = { //소문자로 시작하는 변수 명 주의 porpTypes 
    name: PropTypes.string,
    boolValue: PropTypes.bool,
    numValue: PropTypes.number.isRequired,
    arrayValue: PropTypes.array,
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
    children: PropTypes.node,
}
ChildComponent.defaultProps = {
    numValue: 3,
}
export default ChildComponent;