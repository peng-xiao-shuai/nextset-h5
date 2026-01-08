"use client"

import { Calculator, ChevronDown, ChevronUp, ClipboardMinus, CloudAlert, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const updatedFunctions = [
  {
    icon: <HeartHandshake />,
    title: "连接华为运动健康",
    description: "将训练数据与华为运动健康进行同步整合，减少手动记录成本，训练数据更完整、更连续。",
    color: "from-yellow-500 to-orange-500",
    details: [
      {
        title: "未连接",
        description: "未连接时可以在【历史】<b>点击同步记录</b> 弹出的浮层中任意一项可快速进入【连接第三方APP】进行连接。或者在【设置】-> 【连接第三方APP】中进行连接。",
        image: [
          "/update-function/2.0/微信图片_20260105115106_120_59.jpg",
          "/update-function/2.0/微信图片_20260105115105_119_59.jpg",
        ]
      },
      {
        title: "已连接",
        description: `连接后可以 <b>点击取消授权</b> 取消所有授权，或者点击某一项授权，单独取消。
        `,
        image: [
          "/update-function/2.0/微信图片_20260105115107_121_59.jpg",
        ]
      },
      {
        title: "已连接-写入训练记录至华为运动健康权限",
        description: "授权  <b>写入训练记录至华为运动健康</b> 权限后，每次训练完成会同步到华为运动健康，同时训练数据更新或者删除也会同步更改华为运动健康中数据。也可在【历史】<b>点击同步记录</b> <b>同步训练记录到华为运动健康</b> 可以进行批量写入到华为运动健康。",
        image: [
          "/update-function/2.0/ba034d7cb6b24da039924e0299136fdf.jpg",
        ]
      },
      {
        title: "已连接-读取华为运动健康的运动记录",
        description: "授权  <b>读取华为运动健康的运动记录</b> 权限后，可以在【历史】<b>点击同步记录</b> <b>同步华为运动健康中运动记录</b> 可以进行批量导入华为运动健康中运动数据到系统。",
        image: [
          "/update-function/2.0/1984e11778b50585e6a64b2eec36f07d.jpg",
        ]
      }
    ]
  },
  {
    icon: <Calculator />,
    title: "工具箱",
    description: "工具箱内提供 卡路里计算器、RM 计算器、宏量营养素计算器 等实用工具，可辅助您更科学地评估训练强度、制定训练重量与饮食计划。通过数据化计算，让训练与营养安排更清晰、更高效，帮助您稳步提升训练表现。",
    color: "from-green-500 to-teal-500",
    details: [
      {
        title: "卡路里计算器",
        description: "根据个人基础信息与训练目标，快速估算每日所需热量，帮助合理控制能量摄入。",
        image: [
          "/update-function/2.0/微信图片_20260105115111_127_59.jpg",
        ]
      },
      {
        title: "RM 计算器",
        description: "根据训练重量与完成次数，智能推算 1RM 及不同 RM 区间，辅助制定更科学的训练重量与计划。",
        image: [
          "/update-function/2.0/微信图片_20260105115110_126_59.jpg",
          "/update-function/2.0/微信图片_20260105115109_125_59.jpg",
        ]
      },
      {
        title: "宏量营养素计算器",
        description: "基于热量需求，计算蛋白质、碳水化合物与脂肪的合理分配比例，帮助优化饮食结构",
        image: [
          "/update-function/2.0/微信图片_20260105115109_124_59.jpg",
          "/update-function/2.0/微信图片_20260105115108_123_59.jpg",
        ]
      }
    ]
  },
  {
    icon: <CloudAlert />,
    title: "离线训练",
    description: "在无网络环境下依然完成训练记录，确保每一次训练都不遗漏、不受网络限制。",
    color: "from-red-500 to-pink-500",
    details: [
      {
        title: "离线存储本地",
        description: `
        当无网络的情况下进行训练或者训练时突然断网，训练记录将会存储在本地。同时会有
        <img style='display: inline-block;width: 20px' src='/update-function/2.0/icloud_slash.png'/>
        标识。
        `,
        image: ["/update-function/2.0/微信图片_20260105115104_117_59.jpg"]
      },
      {
        title: "联网自动上传",
        description: `
        当网络恢复时，自动同步本地训练至云端。同步后，本地训练记录将自动删除。
        `,
        image: ["/update-function/2.0/1e05f0a950679c3ebfc81bb4b920aad8.jpg"]
      },
    ]
  },
  {
    icon: <ClipboardMinus />,
    title: "查看动作的历史数据",
    description: "直观回顾每个动作的训练重量、次数与进步轨迹，清晰掌握长期训练变化。",
    color: "from-blue-500 to-cyan-500",
    details: [
      {
        title: "动作历史",
        description: "通过从【动作库】中 <b>点击动作</b> 进入【动作历史】查看过往记录。",
        image: ["/update-function/2.0/微信图片_20260105115107_122_59.jpg"]
      },
    ]
  }
]

const detailColumns = (details: typeof updatedFunctions[number]['details']) => {
  return details.map((detail, detailIndex) => (
    <div
      key={detailIndex}
      className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer group animate-scale-in"
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
        <p className="text-sm opacity-60" dangerouslySetInnerHTML={{
          __html: detail.description
        }}></p>
      </div>
    </div>
  ))
}

export const VersionFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <div className="text-white">
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
      <div className="max-w-6xl mx-auto">
        {/* 功能列表 - 手风琴式 */}
        <div className="space-y-3">
          {updatedFunctions.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
            >
              {/* 功能标题行 */}
              <div
                onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${feature.color} transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                      <div className="w-6 h-6 flex items-center justify-center">
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
    </div>
  );
}