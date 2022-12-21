import React from 'react';
import PropTypes from 'prop-types';
function TodaysPlan(props) {
    return (
        <div>
            기준 함수 컴포넌트 추가 {props.name}
        </div>
    );
}
//자료형을 선언하는 코드(아래)
TodaysPlan.propTypes = { //소문자로 시작하는 변수 명 주의 porpTypes 
    name: PropTypes.string,
}
export default TodaysPlan;