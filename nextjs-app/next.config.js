/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/MovieListComponent",
        permanent: false
      },
      {
        source: "/dashboard",
        destination: "/dashboard/Dashboard",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig