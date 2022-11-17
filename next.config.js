const path = require('node:path');

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      // '@styles': path.resolve(__dirname, 'src/styles'),
      '@styles': path.resolve(__dirname, 'app/styles'),
    };

    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;