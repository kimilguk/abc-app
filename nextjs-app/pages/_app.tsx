import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
// 멀티 레이아웃용 추가 (아래2줄)
import AppLayout from "./dashboard/AppLayout"
import * as React from 'react';
import { useRouter } from 'next/router'; // 챠트 페이지의 페이지 경로가 필요해서 추가

export default function App({ Component, pageProps }: AppProps) {
  // 넥스트js에서 멀티 레이아웃 사용 추가
  const router = useRouter()
  const PageName = router.pathname; //props.children.type.name 대신 사용
  const Layout = (props: { children: React.ReactNode }) => {
    if(Component.name == 'Home' || PageName == '/Home') { // Home에서는@mui디자인인 AppLayout을 사용하지 않는다.
      return <>{props.children}</>
    }else{ // 조건을 여러 개 두면, 페이지 별 사용할 레이아웃 디자인을 적용할 수 있다.
      return <AppLayout>{props.children}</AppLayout>
    }
  }
  console.log('여기1', Component.name); //단, dev에서만 사용, yarn start 에서는 p 로 변경된다. 그래서 router.pathName사용
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
