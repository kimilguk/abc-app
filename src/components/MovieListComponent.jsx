import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class MovieListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [],
            keyword: '2022-12-25',
        };
        this.clickEvent = this.clickEvent.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
    }
    changeEvent(e) {
        /* console.log("id: ", e.target.id);
        this.setState(() => ({ //화면변경
            [e.target.id]: e.target.value, //keyword: e.target.value; 보다 향상
        })); */
        this.state.keyword = e.target.value; //js 값변경
        //this.getData();
    }
    clickEvent() {
        this.getData();
    }
    getData() {
        /* Rest API 통신 기본서식, Promise 객체를 반환
        fetch(url, options)
            .then((response) => console.log("response:", response))
            .catch((error) => console.log("error:", error));
            Promise 객체는 비동기 작업의 단위 이자 비동기 처리에 사용되는 객체.
                API호출이 성공했을 경우(then)에는 응답(response) 객체를 resolve(성공-답)하고
                실패했을 경우(catch)에는 예외(error) 객체를 reject(실패-거부)합니다.
        */
        const searchDate = (this.state.keyword).replace(/-/g,"");//정규표현식 변경조건: /시작...끝/g(글로벌-문서전체)
        const URL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt='+searchDate;
        fetch(URL)
            .then((response) => {
                    //console.log(response.json());
                    return response.json();//프로미스 객체로 리턴 반환 된다.(아래 then 으로)
                }
            ).then(data => { //도트 연산자로 함수를 이어서 편리하게 사용하는 방식을 도트 체인함수라고 한다.
                console.log(data['boxOfficeResult']['dailyBoxOfficeList']);//크롬 브라우저에서 json데이터 확인
                this.setState(prevState => ({ //json 데이터는 키 값으로 데이터를 분리 할 수 있다.
                    movieList: data['boxOfficeResult']['dailyBoxOfficeList'],
                }));
                return data;
            });
    }
    componentWillMount() {
        
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {

    }
    //아래 shouldComponentUpdate()함수는 setState로 state 상태 값이 업데이트되면, 화면을 새로 고침 한다.
    shouldComponentUpdate(nextProps, nextState) {
        return true; //true 가 없으면 화면이 업데이트 되지 않는다.
    }

    componentWillUpdate(nextProps, nextState) {
        
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    componentWillUnmount() {

    }
    addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
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
                        <input type="date" id="keyword" onChange={this.changeEvent} defaultValue={this.state.keyword} name="keyword" className="form-control" aria-label="Text input with segmented dropdown button" />
                        <button type="button" onClick={this.clickEvent} className="btn btn-outline-secondary">검색</button>
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
                    {this.state.movieList.map((movie) => 
                        <tr key={movie.rank}>
                            <th scope="row">{movie.rank}</th>
                            <td>{/* <a href="movie-read.html">{movie.movieNm}</a> */}
                            <Link 
                                to={`/movie/read`}
                                state = {{ 
                                    rank: movie.rank,
                                    movieNm: movie.movieNm,
                                    audiCnt: movie.audiAcc,
                                    audiAcc: movie.audiAcc,
                                    salesAmt: movie.salesAmt,
                                    salesAcc: movie.salesAcc,
                                    openDt: movie.openDt,
                                    keyword: this.state.keyword,
                                }}
                                >
                                    {movie.movieNm}
                                </Link>
                            </td>
                            <td>{this.addComma(movie.audiCnt)}</td>
                            <td>{this.addComma(movie.audiAcc)}</td>
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
    }
}

MovieListComponent.propTypes = {

};

export default MovieListComponent;