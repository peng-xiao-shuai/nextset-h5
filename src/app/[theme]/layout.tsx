import type { Metadata, Viewport } from 'next';
import './globals.css';

export async function generateStaticParams() {
  const paths = ['dark', 'light'].map((theme) => ({
    theme,
  }));

  return paths;
}

export function generateViewport(): Viewport {
  return {
    colorScheme: 'dark light',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 2,
    userScalable: true,
  };
}

export const fetchCache = 'default-cache';

export const metadata: Metadata = {
  title: 'HarmonyOS Next 律己',
  description: 'HarmonyOS Next 律己',
};

export default async function RootLayout(props: CustomReactLayout) {
  const params = await props.params;
  const { theme } = params;
  const { children } = props;

  return (
    <html lang="zh-CN" data-theme={theme}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
