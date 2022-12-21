import React, { Component } from 'react';
import PropTypes from 'prop-types';
//클래스 명은 반드시 대문자로...
class TodaysPlan extends Component {
    render() {
        //const name = this.props.name;
        const {
            name, boolValue, numValue, arrayValue, objValue, nodeValue, funcValue,
        } = this.props;
        return (
            <div>
                작업 컴포넌트 추가 
                {name}{String(boolValue)}<br/>
                {numValue} {arrayValue} {String(objValue)}<br/>
                {nodeValue} {String(funcValue)}
            </div>
        );
    }
}
//자료형을 선언하는 코드(아래)
TodaysPlan.propTypes = { //소문자로 시작하는 변수 명 주의 porpTypes 
    name: PropTypes.string,
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.array,
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
}
export default TodaysPlan;