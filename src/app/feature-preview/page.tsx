import { appInfo } from '@/config/ConfigData';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { GenerateMetadata } from '../meta';
import { HarmonyNextCard } from './ClientHarmonyNextCard';

export const generateMetadata = () => {
  return GenerateMetadata('/feature-preview');
};

export default async function FeaturePreviewPage() {
  return (
    <section className="page-container pb-0! bg-[#f2f3f5]! dark:bg-black!">
      <Suspense>
        <HarmonyNextCard></HarmonyNextCard>
      </Suspense>

      <div
        className={`flex flex-col gap-4 p-6 rounded-xl mb-4 card bg-gradient-to-b to-white/90 dark:from-white/40! dark:to-[#1f2123]/90`}
        /* 
    由于 style 属性中 '--tw-gradient-from' 不是已知的 CSS 属性，TypeScript 会报错。
    解决方法：将 style 的类型断言为 any 或使用 as React.CSSProperties，并用字符串索引绕过类型检查。
  */
        id="harmony-next-card"
        style={{
          ['--tw-gradient-from' as string]: '#ffffff',
        }}
      >
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl mb-1 dark:text-white">
            HarmonyOS Next {appInfo.appName}
          </span>
          <span className="font-bold text-base dark:text-white">
            原生开发、更流畅、更快速
          </span>
          <Image
            src="/light-startIcon.png"
            alt="start icon"
            width={120}
            height={120}
            className="block dark:hidden"
          />
          <Image
            src="/dark-startIcon.png"
            alt="start icon"
            width={120}
            height={120}
            className="hidden dark:block"
          />
        </div>
      </div>

      <div className="card">
        <p className="text-lg font-bold mb-2!">即将上线</p>
        <ol className="list-disc pl-4 space-y-2 text-base">
          <li>【记录】AI 智能分析</li>
          <li>【搭子、首页】长按预览</li>
          <li>【我的】对接华为运动健康</li>
          <li>【记录】月/年统计分析</li>
          <li>【动作】系统动作支持查看详情</li>
        </ol>
      </div>
      {/* <div className="card">
        <p className="text-xl font-semibold mb-4!">已完成功能</p>
        <ol className="list-disc pl-6 space-y-2 text-base">
          <li>运动数据记录与分析</li>
          <li>社交分享功能</li>
          <li>华为账号登录服务</li>
          <li>数据云端同步</li>
        </ol>
      </div> */}
    </section>
  );
}
