/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  env: {
    WORDPRESS_API_URL: 'https://oakleigh.cda-development3.co.uk/wp-json',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // port: '',
        // pathname: '**',
      },
    ],
  },
};
