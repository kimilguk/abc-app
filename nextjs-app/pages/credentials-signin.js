import { getCsrfToken, getProviders, signIn} from "next-auth/react"

export default function SignIn({ csrfToken, providers }) {
  return (
    <>
    {Object.values(providers).filter((provider) => provider.id != 'credentials').map((provider) => (
      <div key={provider.name} style={{display:'inline-block'}}>
        <button className="btn btn-success" onClick={() => signIn(provider.id, {callbackUrl: `/MovieListComponent`})}>
          {provider.id} 소셜 로그인
        </button>
      </div>
      ))}
      <div className="container">
        <h1><a href="/MovieListComponent">넥스트js 프로그래밍</a></h1>{/* <!--#은 가상 링크 값이다.--> */}
        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            Username
            <input name="username" type="text" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      providers,
    },
  }
}