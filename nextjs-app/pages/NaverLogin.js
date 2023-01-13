//import React, { useEffect, useState, useRef } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';

function NaverLogin(props) {
    const { data: session } = useSession();
    if(session) console.log("세션 : ", session);
    return ( //3항 연산자 식으로 로그인 전/후 화면을 구분한다.(아래)
        <>
            {session
            ?
                <div>
                    Looged in as :<span id="user">{session.user.email} 님</span>
                    <button onClick={() => signOut()} className="btn btn-info">로그아웃</button>
                </div>
            :
                <>
                <button onClick={() => signIn()} className="btn btn-success">네이버 로그인</button>
                <span>&nbsp;</span><button onClick={() => signIn()} className="btn btn-info">일반로그인</button>
                </>
            }
        </>
    )
}
export default NaverLogin;