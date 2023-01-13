### 리액트+넥스트js 프로그래밍 강의용 깃 소스 입니다.
#### 넥스트js 3일차 소스입니다. 이번에는 빌드한 후 실제 배포(실행)
- 클라우드에 배포 및 에러 수정
- HTTPS를 통해 로드되었지만 안전하지 않은 리소스를 요청했습니다.그의 요청이 차단되었습니다. 콘텐츠는 HTTPS를 통해 제공되어야 합니다.
-was loaded over HTTPS, but requested an insecure resource
his request has been blocked; the content must be served over HTTPS.
- MovieListComponent.js 에러 수정 http://요청 에러 ( 공공 클라우드는 https를 사용하지 않는 경우가 많기 때문에 노드 js 서버단에서 요청을 별도로 만들어야 한다.)
#### 네이버api 이전 시간소스는 yarn dev 에서 pre-rendering 때문에 오동작 한다.
#### 배포버전에서 네이버api 를 제외한 일별 영화박스오피스는 정상작동 한다.
- [교수의 모든 주차_교시별 강의용소스 링크](https://github.com/kimilguk/abc-app/branches/all)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
