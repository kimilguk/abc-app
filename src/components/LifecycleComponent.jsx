import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * rcfc(reactClassComponentWithMethods)로 9개의 생명주기 함수가 자동 추가 된다
 */
class LifecycleComponent extends Component {
    constructor(props) { //클래스 초기화-useState 초기화 및 bind()바인딩
        super(props);

    }

    componentWillMount() { //화면 렌더링 전 실행-setState()값 할당

    }

    componentDidMount() { //화면 렌더링 후 실행

    }
    //화면 갱신 시(아래)
    componentWillReceiveProps(nextProps) { //상위 컴포넌트의 props값이 변경 되었을 때 실행

    }

    shouldComponentUpdate(nextProps, nextState) {//return true; 화면업데이트-재 렌더링
        return true;
    }

    componentWillUpdate(nextProps, nextState) { //화면업데이트갱신 전

    }

    componentDidUpdate(prevProps, prevState) { //화면업데이트갱신 후

    }

    componentWillUnmount() { //현재 클래스 언마운트(접속이 끊어질 때) 시 실행

    }

    render() { //return(JSX태그-HTML); -화면 렌더링-출력 구현
        return (
            <div>

            </div>
        );
    }
}

LifecycleComponent.propTypes = {

};

export default LifecycleComponent;