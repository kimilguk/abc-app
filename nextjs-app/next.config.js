/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig
module.exports = {
  env: {
    NEXTAUTH_URL: "https://abc-app-gqkih.run-us-west2.goorm.io",
    NEXTAUTH_SECRET: "useanysecret",
  },
};