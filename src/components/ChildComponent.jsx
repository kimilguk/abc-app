import React, { Component } from 'react';
import PropTypes from 'prop-types';
//클래스 명은 반드시 대문자로...
class ChildComponent extends Component {
    render() {
        //const name = this.props.name;
        const {
            name, boolValue, numValue, arrayValue, objValue, nodeValue, funcValue,
        } = this.props; //this는 현재 클래스 영역이다.
        const message = boolValue?'불린 값 있음':'불린 값 없음';
        //console.log(objValue);
        return (
            <div>
                작업 컴포넌트 추가 {name}<br/>
                {message} {numValue}<br/>
                {arrayValue} {objValue.id}<br/>
                {nodeValue} {funcValue(5,5)}
                {this.props.children}
            </div>
        );
    }
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