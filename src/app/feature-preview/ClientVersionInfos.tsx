"use client"

import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { VersionRecords } from './constants';

const detailColumns = (details: typeof VersionRecords[keyof typeof VersionRecords][number]['details']) => {
  return details.map((detail, detailIndex) => (
    <div
      key={detailIndex}
      className="p-3 bg-black/5 hover:bg-black/10  dark:bg-white/5 rounded-lg dark:hover:bg-white/10 transition-all duration-300 cursor-pointer group animate-scale-in"
      style={{ animationDelay: `${detailIndex * 0.1}s`, opacity: 0 }}
    >
      <div className="overflow-hidden rounded mb-3">
        {
          detail.image.map(img => (
            <Image
              key={img}
              src={img}
              alt={detail.title}
              width={1260}
              height={2720}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ))
        }
      </div>

      <div>
        <h4 className="font-semibold text-sm mb-1 transition-colors">
          {detail.title}
        </h4>
        <p className="text-sm opacity-80" dangerouslySetInnerHTML={{
          __html: detail.description
        }}></p>
      </div>
    </div>
  ))
}

/**
 * 版本新功能
 * 
 * @returns 
 */
export const VersionFeatures = ({ version }: { version: keyof typeof VersionRecords }) => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <div className="card">
      <style>{` 
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }
      `}</style>
      {VersionRecords[version] ? <div className="">
        {/* 功能列表 - 手风琴式 */}
        <div className="space-y-3">
          {VersionRecords[version].map((feature, index) => (
            <div
              key={index}
              className="bg-black/5 border-black/10 dark:bg-white/5 backdrop-blur-lg rounded-xl dark:border-white/10 overflow-hidden"
            >
              {/* 功能标题行 */}
              <div
                onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${feature.color} transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                      <div className="w-6 h-6 flex items-center justify-center text-white/80">
                        {feature.icon}
                      </div>
                    </div>
                    <span className="font-bold text-base">{feature.title}</span>

                    <div className='flex justify-end flex-1'>
                      {expandedFeature === index ? (
                        <ChevronUp className="w-5 h-5 opacity-60 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 opacity-60 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm opacity-60">{feature.description}</p>
                </div>
              </div>

              {/* 展开的详细内容 */}
              {expandedFeature === index && (
                <div className="px-4 pb-4 grid md:grid-cols-2 gap-3 animate-slide-down grid-cols-1 max-h-[600px] overflow-y-auto">
                  <div className='flex flex-col gap-3 md:hidden'>
                    {
                      detailColumns(feature.details)
                    }
                  </div>
                  <div className='hidden flex-col gap-3 md:flex'>
                    {
                      detailColumns(feature.details.filter((item, index) => index % 2 == 0))
                    }
                  </div>
                  <div className='hidden flex-col gap-3 md:flex'>
                    {
                      detailColumns(feature.details.filter((item, index) => index % 2 != 0))
                    }
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
        : <div className="">
          <p className="text-sm opacity-60">暂无该版本新功能</p>
        </div>
      }
    </div>
  );
}