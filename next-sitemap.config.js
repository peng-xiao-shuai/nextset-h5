/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://nextset.cn',
  generateRobotsTxt: false, // 使用动态 robots.txt
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/robots.txt',
    '/404',
    '/error',
  ],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  // 对于静态导出，需要手动指定路径
  // transform 函数会处理这些路径的优先级和更新频率
  additionalPaths: async () => {
    return [
      '/',
      '/feature-preview',
      '/home-canvas',
      '/terms',
      '/third-party',
    ]
  },
  transform: async (config, path) => {
    // 根据页面路径设置优先级和更新频率
    let priority = 0.7
    let changefreq = 'daily'

    // 首页优先级最高
    if (path === '/' || path === '') {
      priority = 1.0
      changefreq = 'daily'
    }
    // 重要内容页面
    else if (path.startsWith('/feature-preview') || path.startsWith('/home-canvas')) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // 法律文档页面（更新频率低）
    else if (path.startsWith('/privacy') || path.startsWith('/terms') || path.startsWith('/third-party')) {
      priority = 0.5
      changefreq = 'monthly'
    }
    // 其他页面
    else {
      priority = 0.7
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}

export default config