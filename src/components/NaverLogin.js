import React, { useEffect, useState, useRef } from 'react';

function NaverLogin(props) {
    const tagRef = useRef();
    //화면 갱신용 state 변수 추가(아래)
    const [userInfo,setUserInfo] = useState(
        {
            user_name: (localStorage.getItem('user_name'))?localStorage.getItem('user_name'):'',
            user_email: '',
            profile_image: '',
        }
    );
    const { naver } = window;
    const NAVER_CLIENT_ID = 'YXJYaCx0fJnawGGVopsc'; 
    const NAVER_CALLBACK_URL = "http://127.0.0.1:3000";
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,// 팝업창으로 로그인을 진행할지 여부
            loginButton: { color: 'green', type: 3, height: 58 },//네이버 전용 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
            callbackHandle: true, //분리된 callback 페이지에서도 callback처리를 할 수 있는 값. 우리 작업은 한 페이지이기 때문에 무시
        })
        naverLogin.init();
        //아래 getLoginStatus()함수 부분이 콜백 처리이다. 콜백 데이터는 네이버에서 동의한 데이터만 추출 가능하다.
        //naverLogin 객체를 이용하여 사용자정보를 불러오는데 아래와 같이 naverLogin.user 처럼 직접 접근하여 추출 가능하다.
        //async ~ [await는 여기선 안 보인다.]가 붙은 함수는 {내부 작업}이 마친 후 다른 작업이 진행 되는 동기 작업처럼 된다.
        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                console.log("네이버에서 받은 status :", status);
                // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
                setUserInfo({
                    user_name: naverLogin.user.getName(),
                    user_email: naverLogin.user.getEmail(),
                    profile_image: naverLogin.user.profile_image,
                });
                console.log("사용자 정보", naverLogin.user);
                localStorage.clear();
                localStorage.setItem('user_name', naverLogin.user.getName());
                localStorage.setItem('user_email', naverLogin.user.getEmail());
                localStorage.setItem('profile_image', naverLogin.user.profile_image);
                console.log("로컬 스토리지 :", localStorage.getItem('user_name'));
            }
        })
    }
    useEffect(()=>{
        initializeNaverLogin(); //useEffect로 화면갱신 하지 않으면, 버튼이 안보인다.
    },[]); //생명주기 함수대신 useEffectr()함수사용,[] 의미는 1번만 실행
    //로그아웃 시 로그인 스토리지 정보 지우고 state 상태값 초기화(아래)
    function logout() {
        setUserInfo({
            user_name: '',
            user_email: '',
            profile_image: '',
        });
        localStorage.clear();
    }
    // onClick 이벤트 발생 시 useRef객체(tagRef)를 통해 지정한  항목이 클릭 된다.
    const clickNaverLogin = () => {
		tagRef.current.children[0].click()
	}

    return ( //3항 연산자 식으로 로그인 전/후 화면을 구분한다.(아래)
        <>
            {userInfo.user_name
            ?
                <div>
                    Looged in as :<span id="user">{userInfo.user_name} 님</span>
                    <button onClick={logout} className="btn btn-info">로그아웃</button>
                </div>
            :
                null
            }
            {userInfo.user_name
            ?
                null
            :
                <button onClick={clickNaverLogin} className="btn btn-success">네이버 로그인</button>
            }
            <div id="naverIdLogin" ref={tagRef} style={{display:'none'}} />
        </>
    )
}
export default NaverLogin;