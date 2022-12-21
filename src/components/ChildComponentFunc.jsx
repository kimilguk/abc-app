import React from 'react';
import PropTypes from 'prop-types';
function ChildComponent(props) {
    const {
        name, boolValue, numValue, arrayValue, objValue, nodeValue, funcValue,
    } = props;
    const message = boolValue?'불린 값 있음':'불린 값 없음';
    return (
        <div>
            기준 함수 컴포넌트 추가 {name}<br/>
            {message} {numValue}<br/>
            {arrayValue} {objValue.id}<br/>
            {nodeValue} {funcValue(5,5)}
            {props.children}
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