import { appInfo } from '@/config/ConfigData';
import type { Metadata } from 'next';

export interface Meta extends Metadata {
  title: string;
}

const pathMetaData = {
  '/': {
    title: '',
    description: `${appInfo.appName} - 您的首选应用平台`,
  },
  '/privacy': {
    title: '隐私政策',
    description: `了解 ${appInfo.appName} 如何保护您的隐私`,
  },
  '/terms': {
    title: '用户服务协议',
    description: `${appInfo.appName} 用户服务条款和使用协议`,
  },
  '/feature-preview': {
    title: '即将上线',
    description: `${appInfo.appName} 即将推出的新功能预览`,
  },
  '/third-party': {
    title: '第三方 SDK 列表',
    description: `${appInfo.appName} 使用的第三方服务和 SDK 清单`,
  },
  '/home-canvas': {
    title: '第三方 SDK 列表',
    description: `${appInfo.appName} 使用的第三方服务和 SDK 清单`,
  },
  '/not-found': {
    title: '404',
    description: '页面未找到',
  },
} as const;

const meta: {
  [key: string]: Meta & { description?: string };
} = pathMetaData;

export const GenerateMetadata = (path: keyof typeof pathMetaData): Metadata => {
  const pageData = meta[path];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';
  const logoUrl = `${siteUrl}/logo.png`;

  const title = pageData.title
    ? `${pageData.title} | ${appInfo.appName}`
    : appInfo.appName;

  const description =
    pageData.description || `${appInfo.appName} - 您的首选应用平台`;

  const metadata: Metadata = {
    title,
    description,
    keywords: `${appInfo.appName}, 应用, 平台, ${pageData.title || ''}`
      .split(', ')
      .filter(Boolean),
    robots: 'index, follow',

    // Apple Web App 配置
    appleWebApp: {
      capable: true,
      title: appInfo.appName,
      startupImage: logoUrl,
      statusBarStyle: 'black-translucent',
    },

    // 图标配置
    icons: {
      icon: logoUrl,
      apple: logoUrl,
      shortcut: logoUrl,
    },

    // Open Graph 配置
    openGraph: {
      type: 'website',
      url: siteUrl,
      title,
      description,
      siteName: appInfo.appName,
      images: [
        {
          url: logoUrl,
          width: 200,
          height: 200,
          alt: `${appInfo.appName} Logo`,
        },
      ],
      locale: 'zh_CN',
    },

    // Twitter 卡片配置
    twitter: {
      card: 'summary',
      title,
      description,
      images: {
        url: logoUrl,
        alt: `${appInfo.appName} Logo`,
      },
      // 如果有 Twitter 账号，可以添加
      // site: '@your_twitter_handle',
      // creator: '@your_twitter_handle',
    },

    // 添加其他有用的元数据
    alternates: {
      canonical: `${siteUrl}${path}`,
    },

    // // 视口配置
    // viewport: {
    //   width: 'device-width',
    //   initialScale: 1,
    //   maximumScale: 1,
    // },
  };

  return metadata;
};

// 导出路径类型，方便其他地方使用
export type MetaPath = keyof typeof pathMetaData;

export default meta;
