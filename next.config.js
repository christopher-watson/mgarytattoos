/** @type {import('next').NextConfig} */

const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/images/iu1qj99p/production/*',
          //  port: '',
        },
      ],
    },
   experimental: {
      appDir: true,
      // serverComponentsExternalPackages: ["primereact", "primeicons"]
   }
}

module.exports = nextConfig
