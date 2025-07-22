import { appInfo } from '@/config/ConfigData';
import type { Metadata } from 'next';
export interface Meta extends Metadata {
  title: string;
}

const pathMetaData = {
  '/': {
    title: '',
  },
  '/privacy': {
    title: '隐私政策',
  },
  '/terms': {
    title: '用户服务协议',
  },
  '/feature-preview': {
    title: '即将上线',
  },
  '/third-party': {
    title: '第三方 SDK 列表',
  },
};

const meta: {
  [key: string]: Meta;
} = pathMetaData;

export const GenerateMetadata = (path: keyof typeof pathMetaData) => {
  const metadata = { ...meta[path] };
  metadata.title = `${metadata.title} | ${appInfo.appName}`;
  metadata.description = `${appInfo.appName}`;
  metadata.keywords = `${appInfo.appName}`;
  metadata.robots = 'index, follow';
  metadata.appleWebApp = {
    capable: true,
    title: appInfo.appName,
    startupImage: `/logo.png`,
    statusBarStyle: 'black-translucent',
  };
  metadata.icons = {
    icon: `/logo.png`,
    apple: `/logo.png`,
  };
  metadata.openGraph = {
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: `${metadata.title} | ${appInfo.appName}`,
    description: `${appInfo.appName}`,
    images: [
      {
        url: `/logo.png`,
        width: 200,
        height: 200,
        alt: 'NextSet OG Image',
      },
    ],
  };
  return metadata;
};

export default meta;
