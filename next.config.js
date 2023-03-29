/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS
      ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(', ')
      : '',
    formats: ['image/avif', 'image/webp']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    // camelCase style names from css modules
    config.module.rules
        .find(({oneOf}) => !!oneOf).oneOf
        .filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
        .reduce((acc, {use}) => acc.concat(use), [])
        .forEach(({options}) => {
            if (options.modules) {
                options.modules.exportLocalsConvention = 'camelCase';
            }
        });

    return config;
},
}

module.exports = nextConfig
