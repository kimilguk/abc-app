import React from 'react';
import { Link } from "react-router-dom";
import './css/menu.scss';
function RouterMenu(props) {
    //0.25 에서 0 이 생략. css속성 font-size = JSX코드 fontSize
    const btnStyle = {
        color:"white",
        background:"purple",
        padding:".375rem .75rem",
        borderRadius:".25rem",
        fontSize:"1rem"
    };
    return (
        <div>
            <Link to="/app">
                <button style={{color:"white", background:"orange",padding:".375rem .75rem",borderRadius:".25rem",fontSize: "1rem"}}>리액트 App 문법 학습</button>
            </Link>
            <Link to="/movie">
                <button style={btnStyle}>클래스형 일별박스오피스</button>
            </Link>
            <Link to="/dashboard">
                <button className="btnStyle">대시보드 템플릿</button>
            </Link>
        </div>
    );
}

export default RouterMenu;