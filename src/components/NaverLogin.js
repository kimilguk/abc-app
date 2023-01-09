import { useEffect, useState } from 'react'

const NaverLogin = () => {
    //화면 갱신용 state 변수 추가(아래)
    const [userInfo,setUserInfo] = useState(
        {
            user_name: (localStorage.getItem('user_name'))?localStorage.getItem('user_name'):'',
            user_email: '',
            profile_image: '',
        }
    );
    const { naver } = window
    const NAVER_CLIENT_ID = 'YXJYaCx0fJnawGGVopsc'; 
    const NAVER_CALLBACK_URL = "http://127.0.0.1:3000";
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,// 팝업창으로 로그인을 진행할지 여부
            loginButton: { color: 'green', type: 3, height: 58 },// 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
            callbackHandle: true,
        })
        naverLogin.init()
        // 내장된 naverLogin 을 이용하여 유저(사용자) 정보를 불러오는데 아래와 같이 naverLogin.user 처런 직접 접근하여 추출가능하다.
        // 이때, 데이터는 네이버에서 동의한 데이터만 추출 가능하다.
        // async가 붙은 함수는 {내부 작업이 마치기 전 다른 작업을 못하고, 동기 작업처럼 진행 된다.} 
        naverLogin.getLoginStatus(async function (status) {
            if (status) {
                console.log("네이버에서 받은 status :", status);
                // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다. 
                setUserInfo({
                    user_name: naverLogin.user.getName(),
                    user_email: naverLogin.user.getEmail(),
                    profile_image: naverLogin.user.profile_image,
                });
                localStorage.clear();
                localStorage.setItem('user_name', naverLogin.user.getName())
                localStorage.setItem('user_email', naverLogin.user.getEmail())
                localStorage.setItem('profile_image', naverLogin.user.profile_image)
                console.log("사용자 정보", naverLogin.user);
                console.log("로컬 스토리지 :", localStorage.getItem('user_name'));
            }
        })
    }
    useEffect(()=>{
        initializeNaverLogin(); //useEffect로 화면갱신 하지 않으면, 버튼이 안보인다.
    },[]); //생명주기 함수대신 useEffectr()함수사용,[] 의미는 1번만 실행
    //로그아웃 시 로그인 스토리지 정보 지우고 state 상태값 초기화(아래)
    function logout() {
        localStorage.clear();
        setUserInfo({
            user_name: '',
            user_email: '',
            profile_image: '',
        });
    }

    return ( //3항 연산자 식으로 로그인 전/후 화면을 구분한다.(아래)
        <>
        {userInfo.user_name?<div>Looged in as :<span id="user">{userInfo.user_name} 님</span></div>:null}
        {userInfo.user_name?<button onClick={logout} className="btn btn-info">로그아웃</button>: null }
        {userInfo.user_name?<div id="naverIdLogin" style={{display:'none'}}/>:<div id="naverIdLogin" />}
        </>
    )
}
export default NaverLogin;