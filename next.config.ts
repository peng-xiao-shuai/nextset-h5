import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: true,
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
  generateBuildId: async () => {
    return 'build-id';
  },
  // 启用实验性功能
  experimental: {
    // optimizeCss: true,
    optimizePackageImports: ['lodash', 'date-fns'],
  },
};

if (process.env.NODE_ENV === 'production') {
  // Webpack 优化
  nextConfig.webpack = (config, { isServer }) => {
    if (!isServer) {
      // 代码分割优化
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      };
    }
    return config;
  };
}

export default nextConfig;
