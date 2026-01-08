import { appInfo } from '@/config/ConfigData';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { GenerateMetadata } from '../meta';
import { HarmonyNextCard } from './ClientHarmonyNextCard';
import { VersionFeatures } from './NewFeature';

export const generateMetadata = () => {
  return GenerateMetadata('/feature-preview');
};

export default async function FeaturePreviewPage() {
  return (
    <section className="page-container pb-0! feature-preview">
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
            HarmonyOS {appInfo.appName}
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

      <div className="card mb-4">
        <p className="text-lg font-bold mb-2!">
          <span>版本新功能</span>&nbsp;
          <span className='bg-amber-600 text-amber-100 text-xs px-1.5 py-0.5 rounded-2xl'>V2.0.0</span>
        </p>
        <VersionFeatures />
      </div>

      <div className="card">
        <p className="text-lg font-bold mb-2!">即将上线</p>
        <ol className="space-y-3 text-base">
          {/* <li>【记录】AI 智能分析</li> */}
          {/* <li>【搭子、首页】长按预览</li> */}
          {appInfo.feature.map((feature) => (
            <li key={feature.desc} className='flex p-2 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden'>
              {feature.icon} <strong>{feature.title}</strong>
              <span> {feature.desc}</span>

              <div className='flex justify-end flex-1'>
                <span className={`text-xs rounded-md p-1 ml-2 ${feature.status === '开发中' ? 'text-yellow-100 bg-yellow-600' : feature.status === '即将上线' ? 'text-green-100 bg-green-600' : 'text-gray-600 bg-gray-100 border border-gray-600'}`}> {feature.status}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
