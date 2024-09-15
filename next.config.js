/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },   {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: ''
      }

     
    ]
  }
}

module.exports = nextConfig

