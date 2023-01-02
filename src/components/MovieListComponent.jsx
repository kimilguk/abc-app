import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieListComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        //return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const memberList = [
            { name: '김일국', email: 'admin@test.com'},
            { name: '사용자', email: 'user@test.com'},
        ];
        return (
            /* {memberList.map((member) => <div key={member.email}>{member.name}</div>)} */
            <div className="container">
                <h1><a href="#">리액트 프로그래밍</a></h1>{/* <!--#은 가상 링크 값이다.--> */}
                <div className="row">
                    <div className="col-12">{/* <!--부트스트랩 열column은 12개로 구성된다.--> */}                
                        Looged in as : <span id="user">admin</span>
                        <a href="#" className="btn btn-info">로그아웃</a>
                        <a href="#" className="btn btn-success">네이버 로그인</a>
                    </div>
                </div>
            {/*  <!--여기까지가 개발자가 생각하는 헤더영역 이다.--> */}
                <br/>
                <form action="./movie-list.html" method="GET" className="col-3">
                    <div className="input-group">
                        <input type="date" defaultValue="2022-12-25" name="keyword" className="form-control" aria-label="Text input with segmented dropdown button" />
                        <button type="submit" className="btn btn-outline-secondary">검색</button>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#">페이지이동</a></li>
                        <li><a className="dropdown-item" href="#">1</a></li>
                        <li><a className="dropdown-item" href="#">2</a></li>
                        <li><a className="dropdown-item" href="#">3</a></li>
                        </ul>
                    </div>
                </form>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">순위</th>
                        <th scope="col">영화 제목</th>
                        <th scope="col">일별 관객수</th>
                        <th scope="col">누적 관객수</th>
                        <th scope="col">개봉일</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><a href="movie-read.html">아바타: 물의 길</a></td>
                        <td>100,000</td>
                        <td>5,000,000</td>
                        <td>2022-12-25</td>
                    </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

MovieListComponent.propTypes = {

};

export default MovieListComponent;