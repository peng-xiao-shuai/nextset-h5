import Link from 'next/link';
import { GenerateMetadata } from './meta';

export const generateMetadata = () => {
  return GenerateMetadata('/not-found');
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl mb-4">页面未找到</h2>
      <p className="text-gray-600 mb-8">抱歉，您访问的页面不存在。</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        返回首页
      </Link>
    </div>
  );
}
