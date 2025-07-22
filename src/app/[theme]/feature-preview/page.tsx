import { appInfo } from '@/config/ConfigData';
import Image from 'next/image';
import React from 'react';

export default async function FeaturePreviewPage(props: CustomReactParams) {
  const { theme } = await props.params;
  const color = '#000'; //(await props.searchParams)?.color ?? '#000';

  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-[#f2f3f5] dark:bg-black">
      <div
        className="flex flex-col gap-4 p-6 rounded-xl mb-4 card"
        style={{
          background: `linear-gradient(0deg, rgba(255,255,255,0.6) 20%, ${color} 100%)`,
        }}
      >
        <div className="flex flex-col items-center">
          <span className="font-bold text-xl mb-1">
            HarmonyOS Next {appInfo.appName}
          </span>
          <span className="font-bold text-base mb-4">
            原生开发、更流畅、更快速
          </span>
          <Image
            src={`/${theme}-startIcon.png`}
            alt="start icon"
            width={120}
            height={120}
          />
        </div>
      </div>

      <div className="mb-4 card">
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
