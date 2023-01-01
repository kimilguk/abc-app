import React from 'react';
import { Link } from "react-router-dom";
function RouterMenu(props) {
    return (
        <div>
            <Link to="/app">
                <button>리액트 App 문법 학습</button>
            </Link>
            <Link to="/movie">
                <button>클래스형 일별박스오피스</button>
            </Link>
            <Link to="/dashboard">
                <button>대시보드 템플릿</button>
            </Link>
        </div>
    );
}

export default RouterMenu;