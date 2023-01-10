import React from 'react';
import { useLocation, Link } from 'react-router-dom'; //함수형  컴포넌트 전용(클래스 형 X)
import NaverLogin from './NaverLogin';

function MovieReadComponent(props) {
    function addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ',');
    }
    const location = useLocation(); //함수형 컴포넌트 전용(클래스 형 X)
    console.log("location.state", location.state);
    return (
        <div className="container">
        <h1><a href="#">리액트 프로그래밍</a></h1>{/* <!--#은 가상 링크 값이다.--> */}
        <div className="row">
            <div className="col-12">{/* <!--부트스트랩 열column은 12개로 구성된다.--> */}                
                {/* Looged in as : <span id="user">admin</span>
                <a href="#" className="btn btn-info">로그아웃</a>
                <a href="#" className="btn btn-success">네이버 로그인</a> */}
                <NaverLogin />
            </div>
        </div>{/* <!--여기까지가 개발자가 생각하는 헤더영역 이다.--> */}
        <br />
        <h2>{location.state.movieNm}</h2>
        <form>
            <div className="row mb-3">{/* <!--mb는 마진바텀margin bottom 아래 여백크기--> */}
              <label htmlFor="rank" className="col-sm-2 col-form-label">순위</label>
              <div className="col-sm-10">{/* <!--column 에서 col-sm-10 은 가로12개의 분할에서 10개 영역을 차지한다. --> */}
                <input type="text" className="form-control" id="rank" defaultValue={location.state.rank} readOnly />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="movieNm" className="col-sm-2 col-form-label">영화 제목</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="movieNm" defaultValue={location.state.movieNm} readOnly />
              </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="audiCnt" className="col-sm-2 col-form-label">일별 관객수</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="audiCnt" defaultValue={addComma(location.state.audiCnt)} readOnly />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="salesAmt" className="col-sm-2 col-form-label">일별 매출액</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="salesAmt" defaultValue={addComma(location.state.salesAmt)} readOnly />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="audiAcc" className="col-sm-2 col-form-label">누적 관객수</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="audiAcc" defaultValue={addComma(location.state.audiAcc)} readOnly />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="salesAcc" className="col-sm-2 col-form-label">누적 매출액</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="salesAcc" defaultValue={addComma(location.state.salesAcc)} readOnly />
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="openDt" className="col-sm-2 col-form-label">개봉일</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="openDt" defaultValue={location.state.openDt} readOnly />
                </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">일별 매출 평가</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    보통
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    우수
                  </label>
                </div>
                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3" disabled />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    미달
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    관리자 확인
                  </label>
                </div>
              </div>
            </div>{/* <!--col 1개 컬럼 col text-center 으로 가운데 정렬 가능--> */}
            <div className="row col-12">{/* <!--col-12숫자를 변경하면서 화면12분할(그리드 시스템)에 대해서 확인 한다.--> */}
              {/* <Link to={-1}><button className="btn btn-primary col-12">목록 페이지</button></Link> */}
              <Link
                to={'/'}
                state = {{ 
                    keyword: location.state.keyword,
                }}
              ><button className="btn btn-primary col-12">목록 페이지</button></Link>
            </div>
          </form>
    </div>
    );
}

export default MovieReadComponent;