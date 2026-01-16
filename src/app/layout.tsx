import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from 'next-themes';
export function generateViewport(): Viewport {
  return {
    colorScheme: 'dark light',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
  };
}

export const fetchCache = 'default-cache';

export const metadata: Metadata = {
  title: 'HarmonyOS 律己',
  description: 'HarmonyOS 律己',
};

export default async function RootLayout(props: CustomReactLayout) {
  const { children } = props;

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
}
