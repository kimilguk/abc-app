import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
// 멀티 레이아웃용 추가 (아래2줄)
import AppLayout from "./dashboard/AppLayout"
import * as React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // 넥스트js에서 멀티 레이아웃 사용 추가
  const Layout = (props: { children: React.ReactNode }) => {
    if(Component.name == 'Home') { // Home에서는@mui디자인인 AppLayout을 사용하지 않는다.
      return <>{props.children}</>
    }else{ // 조건을 여러개 두면, 해당 페이지에 사용할 레이아웃 디자인을 적용할 수 있다.
      return <AppLayout>{props.children}</AppLayout>
    }
  }
  console.log('여기1', Component.name)
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
