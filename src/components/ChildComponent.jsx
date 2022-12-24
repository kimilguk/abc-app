import React, { Component } from 'react';
import PropTypes from 'prop-types';
//클래스 명은 반드시 대문자로...
class ChildComponent extends Component {
    constructor(props) { //생성자에서 state 객체 초기화
        super(props);//부모Component클래스의 props 객체 초기화
        //state예약어로 객체변수초기화(아래)
        this.state = {
            loading: true,
            formData: 'no data',
        };
        //이후 콜백(clickEvent) 함수 내부에서 state변수를 사용하기 위해 bind(this)로 바인딩
        this.clickEvent = this.clickEvent.bind(this);
    }
    componentWillMount() { //클래스 마운트(렌더링) 전 실행
        //4초 후에 clickEvent 함수를 호출(아래)
        setTimeout(this.clickEvent, 4000);
    }
    clickEvent() {
        const data = 'new data';
        let {formData} = this.state;//초기formData변수만 바인딩
        //setState()리액트 내장함수로 state 변경
        /* this.setState({
            loading: false,
            formData: data + formData,
        }); */
        this.state.loading = false;
        this.state.formData = data + formData;
        this.forceUpdate();
        //아래 처럼 리액트 내장 변수인 prevState 를 사용하면 this.state가 필요없다.
        /* this.setState(prevState => ({
            loading: false,
            formData: data + prevState.formData,
        })); */
        //this.state.loading은 render함수가 실행되기 전에는 true 이다.
        console.log('loading 변수값', this.state.loading);
        //이후 호출될 render() 함수에서 this.state.loading은 false로 동기화된다.
    }
    render() {
        //const name = this.props.name;
        const {
            name, boolValue, numValue, arrayValue, objValue, nodeValue, funcValue,
        } = this.props; //this는 현재 클래스 영역이다.
        const message = boolValue?'불린 값 있음':'불린 값 없음';
        //console.log(objValue);
        return (
            <div>
                {/*주석,state 데이터는 this.state로 접근 가능하다.*/}
                <p>
                    로딩중: {String(this.state.loading)}
                    결과: {this.state.formData}
                </p>
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