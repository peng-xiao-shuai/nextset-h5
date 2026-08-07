import { appInfo } from "@/config/ConfigData"
import { Calculator, SettingsIcon, UserCircle2Icon, ArrowUpRightFromCircleIcon, ClipboardMinus, CloudAlert, Dumbbell, HeartHandshake, LayoutGrid, ChartColumnIncreasing, User } from 'lucide-react';

export const VersionRecords = {
  '2.0.0': [
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
  ],
  '2.1.0': [
    {
      icon: <ChartColumnIncreasing />,
      title: "统计分析功能",
      description: "底部【历史】Tab页新增【统计】子页用于可视化展示总览、训练部位、肌群分布、疲劳状态等 8 大维度数据，让训练更科学高效。",
      color: "from-red-500 to-pink-500",
      details: [
        {
          title: "总览",
          description: "总览页面用于统计周/月训练数据以及对比上个周/月训练数据。统计包括训练次数、热量消耗、平均组间歇、训练容量、平均训练时长、平均训练负荷。",
          image: ["/update-function/2.1/97e6c64ac5da1428bf1f2603ee052d57.jpg"]
        },
        {
          title: "训练部位",
          description: "训练部位以人体热力图的形式展示，统计每个肌群的训练次数（暂时仅支持训练次数），颜色越深表示训练次数越多。（完成一个动作时，主要训练肌群计为 1，参与肌群计为 0.5。例如：杠铃卧推中，中下胸计为 1次，前束、三头各计为 0.5次。）",
          image: ["/update-function/2.1/c94d523fa61708d069269b2ff39f54a6.png"]
        },
        {
          title: "日历热力图",
          description: "统计月训练数据。支持组数、容量、训练时长、训练负荷、RPE等数据的热力图展示。数值越大颜色越深。",
          image: ["/update-function/2.1/a4f306310a2a45728e885a9ba42b7158.png"]
        },
        {
          title: "肌群分布柱状图（支持横屏展示）",
          description: "统计每个肌群的组数、容量、训练次数，同时可以切换主肌群（例如：胸、背这类大肌群）以及子集肌群（例如：胸-中下胸、胸-前束、胸-三头）。（完成一个动作时，主要训练肌群计为 1，参与肌群计为 0.5。例如：杠铃卧推中，中下胸计为 1次，前束、三头各计为 0.5次。）",
          image: ["/update-function/2.1/ab1a99af6c3ca702d061860381c26562.png"]
        },
        {
          title: "训练统计折线图（支持横屏展示）",
          description: "统计每天的组数、容量、训练次数数据。",
          image: ["/update-function/2.1/0fd39026-aff2-463c-b2e9-46a329dd9f56.png"]
        },
        {
          title: "整体负荷训练折线图（支持横屏展示）",
          description: "统计每天的训练负荷数据。",
          image: ["/update-function/2.1/d53cd1d0-295b-4091-9aaf-5d27396e6516.png"]
        },
      ]
    },
    {
      icon: <Dumbbell />,
      title: "训练中",
      description: "训练中新增主观整体强度（sRPE）",
      color: "from-blue-500 to-cyan-500",
      details: [
        {
          title: "",
          description: "通过从点击右上角 <b>整体强度</b> 主动设置整体训练强度，默认使用算法计算整体强度评分。（整体强度评分越高，训练负荷越高）",
          image: ["/update-function/2.1/f8d26e59-7996-4313-b3df-589ab3e29fd6.png"]
        },
      ]
    },
    {
      icon: <LayoutGrid />,
      title: "动作库",
      description: "动作库中补充常用，方便用户快速选择动作同时支持搜索全部动作。补充动作所训练到的肌群视图。",
      color: "from-yellow-500 to-orange-500",
      details: [
        {
          title: "常用分类展示",
          description: "在【动作库】中支持常用分类展示，方便用户快速选择动作。",
          image: [
            "/update-function/2.1/6da6e17d41bcea9e80f046cc7bcc93e3.jpg",
          ]
        },
        {
          title: "动作库支持搜索全部肌群中动作",
          description: "在【动作库】中支持搜索全部肌群中动作，方便用户快速选择动作。",
          image: [
            "/update-function/2.1/bb1ab8168eb56f709767173a801ff2a6.jpg",
          ]
        },
      ]
    },
  ],
  '2.2.0': [
    {
      icon: <SettingsIcon />,
      title: "全局记重单位",
      description: "支持全局设置记重单位，支持磅（lbs）和千克（kg），默认使用千克（kg）。",
      color: "from-red-500 to-pink-500",
      details: [
        {
          title: "",
          description: "切换记重单位后，训练记录中的重量会自动转换为新的单位.",
          image: ["/update-function/2.2/38c224f597b8a2859eaf912ab4a06b3d.jpg", "/update-function/2.2/1b7faa50e3274c24b34adcee740fcdf8.jpg"]
        },
        {
          title: "创建训练",
          description: "创建训练记录时，选择动作后自动将动作重量转换为新的单位。",
          image: ["/update-function/2.2/5f6bc5bd39d7ee22215bdc9c9ced357d.jpg"]
        },
        {
          title: "历史数据",
          description: "历史已完成的训练仅统计受影响，动作统计、组数据不受影响（动作设置的单位 > 全局计重单位）。",
          image: ["/update-function/2.2/b75db733470b149cf217efad67361f35.jpg"]
        },
      ]
    },
    {
      icon: <UserCircle2Icon />,
      title: "个人资料",
      description: "补充支持设置体脂，补充体脂体重历史曲线展示。",
      color: "from-blue-500 to-cyan-500",
      details: [
        {
          title: "体脂体重历史曲线",
          description: "选择近7条、近15条、近30条切换，展示体脂体重历史曲线（历史曲线中不包含当前的体脂体重数据）。",
          image: ["/update-function/2.2/4b094e00515b02074e5f5b7fa6fae30c.jpg"]
        },
      ]
    },
  ],
  '2.3.0': [
    {
      icon: <ArrowUpRightFromCircleIcon />,
      title: "统计分析分享功能",
      description: "统计分析页面右上角新增分享功能，支持系统分享当前统计页面截图",
      color: "from-red-500 to-pink-500",
      details: [
        {
          title: "",
          description: "",
          image: ["/update-function/2.3/ffb9856b20e15839277a9de2f4db66a2.jpg"]
        },
      ]
    },
    {
      icon: <Dumbbell />,
      title: "训练中",
      description: "训练中支持设置总消耗热量。",
      color: "from-blue-500 to-cyan-500",
      details: [
        {
          title: "训练中新增总消耗热量更改",
          description: "通过从点击右上角 <b>🔥</b> 主动设置总消耗热量，默认使用算法计算总消耗热量。",
          image: ["/update-function/2.3/ab79e6a5-b5ee-404c-9da2-a3696e6b96a7.png"]
        },
      ]
    },
    {
      icon: <LayoutGrid />,
      title: "动作详情",
      description: "动作详情页面支持查看动作训练肌群、器械类型。支持动作趋势数据图表（包含容量、次数、RPE、休息时长维度统计）。",
      color: "from-yellow-500 to-orange-500",
      details: [
        {
          title: "",
          description: "",
          image: [
            "/update-function/2.3/b5ed0d0cc904dd307f93d86da41a2e12.jpg",
          ]
        },
      ]
    },
  ],
  [appInfo.version]: [
    {
      icon: <Dumbbell />,
      title: "训练中",
      description: "新增实况窗功能，支持在训练中查看实况窗，支持查看训练数据、训练进度、训练状态等。",
      color: "from-red-500 to-pink-500",
      details: [
        {
          title: "",
          description: "",
          image: ["/update-function/2.3/1/20c27dde4cb82f06d1b8e88012c3ecb8.png"]
        },
      ]
    },
    {
      icon: <User />,
      title: "个人资料",
      description: "补充BMI和FFMI计算。",
      color: "from-blue-500 to-cyan-500",
      details: [
        {
          title: "",
          description: "",
          image: ["/update-function/2.3/1/b3e62dc0de1aa478fb12d686f606d0fd.jpg"]
        },
      ]
    },
  ],
}