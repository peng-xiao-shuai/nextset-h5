// app/error.tsx
'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-1!">出错了！</h1>
      <h2 className="text-xl my-1!">页面加载出现问题</h2>
      <p className="text-gray-400 my-2!">{error.message || '发生了未知错误'}</p>
      <div className="space-x-4">
        <button
          onClick={() => reset()}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          重试
        </button>
        <button
          className="px-4 py-1 bg-gray-500 rounded hover:bg-gray-600"
        >
          <Link
            href="/"
          >
            返回首页
          </Link>
        </button>
      </div>
    </div>
  );
}
