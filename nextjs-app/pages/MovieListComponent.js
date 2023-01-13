//import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//import { Link, useLocation } from "react-router-dom";
import Link from 'next/link';
import {useRouter} from 'next/router';
import NaverLogin from './NaverLogin';

function MovieListComponent() {
    //const location = useLocation(); //함수형 컴포넌트 전용(클래스 형 X)
    const location = useRouter(); //함수형 컴포넌트 전용(클래스 형 X)
    //console.log(location.state);
    const [state,setState] = useState(
        {
            movieList: [],
            keyword: (location.query.keyword)?location.query.keyword:'2022-12-25',
        }
    );
    const changeEvent = (e) => {
        state.keyword = e.target.value; //js 값변경
    }; //위 처럼 람다식 으로 표현이 가능하다. 또는 그냥 아래 처럼 function 서식을 사용한다.
    function clickEvent () {
        getData();//함수형은 1번 검색 한 후 state.keyword 객체가 사라지기 때문에 if조건처리
    };
    function getData() {
        const searchDate = (state.keyword).replace(/-/g,"");//정규표현식 변경조건: /시작...끝/g(글로벌-문서전체)
        const URL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+searchDate;
        fetch(URL)
            .then((response) => {
                    return response.json();//프로미스 객체로 리턴 반환 된다.(아래 then 으로)
                }
            ).then(data => { //도트 연산자로 함수를 이어서 편리하게 사용하는 방식을 도트 체인함수라고 한다.
                console.log(data['boxOfficeResult']['dailyBoxOfficeList']);//크롬 브라우저에서 json데이터 확인
                setState(prevState => ({ //json 데이터는 키 값으로 데이터를 분리 할 수 있다.
                    movieList: data['boxOfficeResult']['dailyBoxOfficeList'],
                    keyword : state.keyword, //검색 날짜를 추가하면 if(state.keyword) 조건이 필요없어진다.
                }));
                return data;
            });
    }
    /* componentDidMount() {
        this.getData();
    } */
    useEffect(()=>{
        getData();//함수형은 1번 검색 한 후 state.keyword 객체가 사라지기 때문에 if조건처리
    },[]); //생명주기 함수대신 useEffectr()함수사용,[] 의미는 1번만 실행
    
    function addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }
    //render() {
        const memberList = [
            { name: '김일국', email: 'admin@test.com'},
            { name: '사용자', email: 'user@test.com'},
        ];
        
        return (
            
            /* {memberList.map((member) => <div key={member.email}>{member.name}</div>)} */ 

            <div className="container">
                <h1><a href="#">넥스트js 프로그래밍</a></h1>{/* <!--#은 가상 링크 값이다.--> */}
                <div className="row">
                    <div className="col-12">{/* <!--부트스트랩 열column은 12개로 구성된다.--> */} 
                        {/* Looged in as : <span id="user">admin</span>
                        <a href="#" className="btn btn-info">로그아웃</a>
                        <a href="#" className="btn btn-success">네이버 로그인</a> */}
                        <NaverLogin />
                    </div>
                </div>
            {/*  <!--여기까지가 개발자가 생각하는 헤더영역 이다.--> */}
                <br/>
                <form action="./movie-list.html" method="GET" className="col-3">
                    <div className="input-group">
                        <input type="date" id="keyword" onChange={changeEvent} defaultValue={state.keyword} name="keyword" className="form-control" aria-label="Text input with segmented dropdown button" />
                        <button type="button" onClick={clickEvent} className="btn btn-outline-secondary">검색</button>
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
                    {/* <tr>
                        <th scope="row">1</th>
                        <td><a href="movie-read.html">아바타: 물의 길</a></td>
                        <td>100,000</td>
                        <td>5,000,000</td>
                        <td>2022-12-25</td>
                    </tr> */}
                    {state.movieList.map((movie) => 
                        <tr key={movie.rank}>
                            <th scope="row">{movie.rank}</th>
                            <td>{/* <a href="movie-read.html">{movie.movieNm}</a> */}
                            <Link 
                                href={{
                                    pathname: '/MovieReadComponent',
                                    query: { 
                                        post: JSON.stringify(movie),
                                        //rank: movie.rank,
                                        //movieNm: movie.movieNm,
                                        //audiCnt: movie.audiAcc,
                                        //audiAcc: movie.audiAcc,
                                        //salesAmt: movie.salesAmt,
                                        //salesAcc: movie.salesAcc,
                                        //openDt: movie.openDt,
                                        keyword: state.keyword,
                                    },
                                  }}
                                  as={'/MovieReadComponent'}
                                >
                                    {movie.movieNm}
                                </Link>
                            </td>
                            <td>{addComma(movie.audiCnt)}</td>
                            <td>{addComma(movie.audiAcc)}</td>
                            <td>{movie.openDt}</td>
                        </tr>)
                    }
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
    //}
}

MovieListComponent.propTypes = {

};

export default MovieListComponent;