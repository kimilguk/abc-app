import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver"
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  // Configure one or more authentication providers
  secret: process.env.SECRET,
  providers: [
    NaverProvider({
      clientId: process.env.Naver_Client_ID,
      clientSecret: process.env.Naver_Client_Secret,
    }),
    CredentialsProvider({
      //http://localhost:3000/api/auth/signin 로그인 기본 폼 제공
      name: "Credentials",
      //아래 값에 해당하는 사람 만 통과할 수 있다.
      credentials: {
          username: { label: "Username", type: "text", placeholder: "kim1" },
          password: { label: "Password", type: "password", placeholder: "1234" }
      },
      async authorize(credentials, req) {
          console.log(credentials);
          console.log(req.body);
          let user = '';
          if(credentials.username == 'kim1' 
            && credentials.password == '1234' 
            && credentials.csrf == req.body.csrf) { //동일 사이트 에서만 인증이 된다.
            // 사용자 인증 로직이 필요하다.(아래는 강제로 사용자 1명 부여)
            user = { id: 1, name: "김일국", email: "test@test.com" }
          }
          if (user) {
              // 외부에서 authrize 함수를 호출하여 접속된 사용자정보를 얻을 수 있다.
              return user
          } else {
              // 외부에서 authrize 함수를 통과하지 못하면, 로그인 실패이다.
              return null
          }
      }
    }),
  ],
  /* callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      console.log("세션 서버 콘솔: ", session);
      return session
    }
  }, */
})