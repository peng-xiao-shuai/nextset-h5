'use client';
import { appInfo } from '@/config/ConfigData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const footerLinks = [
    { key: 'privacy', text: '隐私政策' },
    { key: 'terms', text: '用户协议' },
    { key: 'contact', text: '联系我们' },
  ] as const;
  useEffect(() => {
    // 页面加载动画
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleDownload = (platform: string) => {
    const messages = {
      harmony: '正在跳转到HarmonyOS应用市场...',
    };

    // 实际使用时可以替换为真实的下载链接
    // window.location.href = 'harmony_download_url';
  };

  const showAgreement = (type: (typeof footerLinks)[number]['key']) => {
    switch (type) {
      case 'privacy':
        window.location.href =
          'https://agreement-drcn.hispace.dbankcloud.cn/index.html?lang=zh&agreementId=1739950591389519872';
        break;
      case 'terms':
        window.location.href = '/terms';
        break;
      case 'contact':
        const mailtoLink = `mailto:${encodeURIComponent(appInfo.email)}`;
        window.location.href = mailtoLink;
        break;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* 主内容区域 */}
      <div className="flex-1 p-5 flex flex-col items-center justify-center">
        <div
          className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-500/10 dark:shadow-gray-900/20 rounded-3xl p-10 max-w-md w-full text-center `}
        >
          {/* APP图标 */}
          <div className="w-24 h-24 rounded-2xl mx-auto mb-5 flex items-center justify-center text-4xl shadow-2xl">
            <Image
              src={appInfo.appLogo}
              width={96}
              height={96}
              alt={appInfo.appName + ' Logo'}
              className="rounded-2xl overflow-hidden"
            ></Image>
          </div>

          {/* APP名称和版本 */}
          <h1 className="text-3xl font-bold mb-2">{appInfo.appName}</h1>
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-5">
            版本 {appInfo.version}
          </div>

          {/* APP描述 */}
          <div className="mb-10">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base text-left">
              {appInfo.appDesc}
            </p>
          </div>

          {/* 主要功能 */}
          <div className="text-left mb-10">
            {appInfo.appFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center mb-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <div
                  className="size-2 rounded-full mr-3 flex-shrink-0"
                  style={{ background: '#ffffff' }}
                ></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* 下载按钮 */}
          <div className="mb-5">
            <button
              onClick={() => handleDownload('harmony')}
              className="w-full py-2 px-6 rounded-xl text-base text-shadow-md font-bold text-[#fef0f0] select-none border-none cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-95"
              style={{
                background: 'linear-gradient(45deg, #fc2c4e, #fc5668)',
              }}
            >
              HarmonyOS下载
            </button>
          </div>
        </div>
      </div>

      {/* 底部协议 */}
      <footer className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm p-5 text-center border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-center gap-5 mb-3 flex-wrap">
          {footerLinks.map((link) => (
            <Link
              key={link.key}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showAgreement(link.key);
              }}
              className="no-underline text-sm transition-all duration-200 hover:scale-105"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs">
          &copy; 2025 彭帅 All rights reserved.{' '}
          <Link href="https://beian.miit.gov.cn/">湘ICP备2025130736号</Link>
        </p>
      </footer>
    </div>
  );
}
