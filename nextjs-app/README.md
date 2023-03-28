### 리액트+넥스트js 프로그래밍 강의용 깃 소스 입니다.
#### 넥스트js 기반 타입스트립트 수업용 자료를 추가 abc-app15_02 깃 소스 부터 적용
- 2023.03.28(화): 넥스트js에서 레이아웃페이지를 구현하여 기존작업물 통합
- 2023.03.27(월): 넥스트js에서 yarn build 후 yarn start 사용
```
// 빌드시 The defautl export is not a React Component in page : dashboard/listitems.tsx에러.
// 즉, pages폴더에는 export default로 사용할 컴포넌트가 있어야 한다. listitems.tsx 파일에 아래 추가
export default function componentName() {} //위 문제 때문에 빈 함수(=클래스)로 컴포넌트를 추가한다.
```
- 2023.03.26(일): 넥스트js에서 SCSS 사용
- 2023.03.25(토): 넥스트js에서 css 사용
- 2023.03.24(금): 넥스트js 대시보드에서 인터페이스 사용
- @component처럼 컴포넌트명에 @애노테이션이 붙는 이유는 소스폴더에 루트 경로를 줄 때 사용하거나,
- @path처럼 접근경로의 패키지명이나 경로가 길 때 별칭으로 사용하여 접근할 때 짧게 사용할 수 있다.
- 2023.03.23(목): 타입스크립트 추상클래스와 객체의 다형성 작업
- 2023.03.22(수): 타입스크립트 객체지향 프로그래밍의 클래스와 상속
- 2023.03.21(화): 타입스크립트 커스텀(type, class, interface)변수 기초
- 2023.03.20(월): 타입스크립트 기본(원시)변수 기초와 확장타입 사용.
- 2023.03.16(목): 타입스크립트 기초. 실행 예) npx ts-node 01.ts

#### 넥스트js 4일차 소스입니다. 이번에는 빌드한 후 실제 배포(실행)
- 네이버 로그인 api 수정 및 클라우드에 배포
- next-auth 내장된 로그인 폼을 커스터 마이징한다.
- 기숲참조: https://next-auth.js.org/configuration/pages#credentials-sign-in

#### yarn build 배포버전에서 네이버api 와 일별영화박스오피스는 정상작동 한다.
- 1페이지에 보여줄 일별박스오피스 개수를 검색에 추가(과제물)
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
