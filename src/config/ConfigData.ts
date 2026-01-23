import { Github, Mail, Rocket, Dumbbell, BarChart3, Timer, Users, Calculator, Zap, BadgeCheck, Target } from "lucide-react";

export const sdk = [
  {
    name: '友盟+SDK',
    purpose: '运营统计与分析',
    scene: '统计：当用户使用APP时',
    info: '设备信息（IMEI/MAC/Android ID/IDFA/OpenUDID/GUID/SIM卡IMSI/ICCID）、IP',
    way: 'SDK本机采集，不涉及数据共享',
    company: '友盟同欣（北京）科技有限公司',
    policy: 'https://www.umeng.com/policy',
  },
  // {
  //   name: '华为推送SDK（HarmonyOS(java)版）',
  //   purpose: '用于消息推送',
  //   scene: '通知：当用户收到好友通知时',
  //   info: '应用信息（应用基本信息）、设备信息（设备型号、操作系统、系统设置），网络信息（网络信息、运营商信息、SSID、IP地址）',
  //   way: 'SDK本机采集，不涉及数据共享',
  //   company: '华为软件技术有限公司',
  //   policy: 'https://developer.huawei.com/consumer/cn/doc/30101',
  // },
];

/**
 * 个人信息收集说明
 */
export const personalInfo = [
  {
    type: '华为账号信息',
    purpose: '账号登录和身份验证',
    way: '第三方授权',
    isRequired: '是',
    impact: '无法使用应用',
  },
  {
    type: '训练数据',
    purpose: '提供个人化训练记录服务',
    way: '用户主动输入',
    isRequired: '否',
    impact: '不影响基础功能',
  },
  {
    type: '身体数据',
    purpose: '完善用户画像，提供个性化建议',
    way: '用户主动输入',
    isRequired: '否',
    impact: '不影响核心功能',
  },
  {
    type: '自定义动作',
    purpose: '个性化训练内容定制',
    way: '用户主动创建',
    isRequired: '否',
    impact: '仅影响个性化功能',
  },
  {
    type: '用户反馈',
    purpose: '产品改进和问题解决',
    way: '用户主动提交',
    isRequired: '否',
    impact: '不影响使用',
  },
];

type Id = string | number;

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
  priority: "low" | "medium" | "high";
  tags: string[];
  // comments: number;
  // attachments: number;
  dueDate?: string;
  link?: string
};

/**
 * app 配置
 */
export const appInfo = {
  appName: '律己',
  appNameEn: 'NextSet',
  appDesc:
    '完全免费的力量训练记录与数据分析 App，专为健身爱好者打造。无论你是初学者还是资深玩家，都能用它轻松记录训练。',
  version: '2.0.0',
  appLogo: '/logo.png',
  downloadUrl: 'https://url.cloud.huawei.com/xq7Yg59fGg',
  github: {
    icon: Github,
    href: 'https://github.com/peng-xiao-shuai'
  },
  email: {
    icon: Mail,
    href: 'mailto:nextset@qq.com'
  },

  features: [
    {
      icon: BadgeCheck,
      title: "完全免费",
      description:
        "所有功能无付费门槛，不订阅、不内购，专注训练本身。",
    },
    {
      icon: Zap,
      title: "轻量且流畅",
      description:
        "鸿蒙原生开发，启动快、操作顺，不做臃肿功能堆砌。",
    },
    {
      icon: Target,
      title: "专注训练记录",
      description: "只为力量训练记录与数据分析而生，让进步清晰可见。",
    },
  ],

  initialColumns: [
    { id: "todo", title: "待办事项" },
    { id: "in-progress", title: "进行中" },
    { id: "in-test", title: "测试中" },
    { id: "done", title: "完成" },
  ] as Column[],

  initialTasks: [
    {
      id: "1",
      columnId: "todo",
      content: "碰一碰功能",
      priority: "high",
      tags: ["开发", '新的'],
      // comments: 3,
      // attachments: 2,
      // dueDate: "Tomorrow",
    },
    {
      id: "2",
      columnId: "todo",
      content: "实况窗功能",
      priority: "medium",
      tags: ["开发", '新的'],
      // comments: 1,
      // attachments: 0,
      // dueDate: "Next Week",
    },
    {
      id: "3",
      columnId: "in-test",
      content: "优化训练页面部分功能操作简化",
      priority: "high",
      tags: ["优化"],
      // comments: 5,
      // attachments: 1,
      // dueDate: "Today",
    },
    {
      id: "3.1",
      columnId: "in-progress",
      content: "统计分析功能",
      priority: "high",
      tags: ["新"],
      // comments: 5,
      // attachments: 1,
      // dueDate: "Today",
    },
    {
      id: "4",
      columnId: "in-test",
      content: "动作库新增常用功能",
      priority: "medium",
      tags: ["新的"],
      // comments: 2,
      // attachments: 1,
      // dueDate: "Yesterday",
    },
    {
      id: "5",
      columnId: "in-test",
      content: "优化动作库搜索功能",
      priority: "medium",
      tags: ["优化"],
      // comments: 2,
      // attachments: 1,
      // dueDate: "Yesterday",
    },
    {
      id: "5-1",
      columnId: "in-test",
      content: "优化首页顶部设置体重，视图显示问题",
      priority: "low",
      tags: ["优化"],
      // comments: 2,
      // attachments: 1,
      // dueDate: "Yesterday",
    },
    {
      id: "6",
      columnId: "done",
      content: "Release v2.0.0",
      priority: "high",
      tags: ["发布"],
      link: './feature-preview',
      // comments: 12,
      // attachments: 4,
      dueDate: "2026/01/08",
    },
  ] as Task[],

  services: [
    {
      icon: Dumbbell,
      title: "训练记录",
      description:
        "快速记录每一次力量训练，让进步有迹可循。支持自定义动作库，让训练不在受限。",
      badge: null,
    },
    {
      icon: BarChart3,
      title: "数据分析",
      description:
        "用数据看见你的成长，训练进步一目了然。",
      badge: '即将推出',
    },
    {
      icon: Timer,
      title: "训练管理",
      description:
        "科学管理训练节奏，让每一次训练更高效。支持与华为运动健康数据同步，让训练记录更完整、更连贯。",
      badge: null,
    },
    {
      icon: Users,
      title: "训练搭子",
      description:
        "找到你的训练搭子，坚持不再孤单。",
      badge: null,
    },
    {
      icon: Rocket,
      title: "极简体验",
      description:
        "无广告、无付费门槛，打开即用，专注于记录与数据。",
      badge: null,
    },
    {
      icon: Calculator,
      title: "辅助工具",
      description:
        "提供卡路里计算器、RM 计算器、宏量营养素计算器 等实用工具，可辅助您更科学地评估训练强度、制定训练重量与饮食计划。",
      badge: "新功能",
    },
  ],

  teamMembers: [
    {
      name: "彭小帅",
      role: "前端&App开发&UI/UX 设计",
      bio: "负责产品前端与 App 端开发，同时承担界面与交互设计，专注于简洁、高效的训练记录体验。",
      image: "https://avatars.githubusercontent.com/u/53845479?v=4",
      location: "Guangzhou",
      skills: ["Frontend", "App Development", "UI/UX Design"],
      gradient: "from-foreground/12 via-foreground/5 to-transparent",
      social: {
        // twitter: "#",
        // linkedin: "#",
        github: "https://github.com/peng-xiao-shuai",
        email: "mailto:nextset@qq.com",
      },
    },
    {
      name: "z",
      role: "后端开发｜系统与接口",
      bio: "负责后端服务架构、核心接口与业务逻辑实现，保障系统稳定运行与数据可靠性。",
      image: "./avatar/z.jpg",
      location: "China",
      skills: ["Backend", "API Design", "System Architecture"],
      gradient: "from-foreground/12 via-foreground/5 to-transparent",
      // social: {
      //   twitter: "#",
      //   linkedin: "#",
      //   github: "#",
      //   email: "michael@example.com",
      // },
    },
    // {
    //   name: "Emily Rodriguez",
    //   role: "Head of Design",
    //   bio: "Creative mind behind beautiful interfaces",
    //   image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    //   location: "London",
    //   skills: ["UI/UX", "Branding", "Motion"],
    //   gradient: "from-white/12 via-white/5 to-transparent",
    // social: {
    //   twitter: "#",
    //   linkedin: "#",
    //   github: "#",
    //   email: "emily@example.com",
    // },
    // },
    {
      name: "dkrekskeo",
      role: "后端开发｜数据与业务逻辑",
      bio: "负责数据模型设计与业务逻辑实现，支撑训练记录、统计分析等核心功能。",
      image: "./avatar/dkrekskeo.jpg",
      location: "China",
      skills: ["Backend", "Data Modeling", "Business Logic"],
      gradient: "from-foreground/12 via-foreground/5 to-transparent",
      // social: {
      //   twitter: "#",
      //   linkedin: "#",
      //   github: "#",
      //   email: "david@example.com",
      // },
    },
  ],

  faqs: [
    {
      question: "为什么没有 RPE 标记？",
      answer:
        "我们也曾设想过在 UI 中添加 RPE 标记，经过团队讨论发现需要用户主动去标记会增加用户操作。故此我们将主动 RPE 标记改为算法计算标记，根据历史训练以及体重计算得出 RPE。（注: 没有补充体重数据以及动作首次开始训练是没有 RPE 标记的）",
    },
    {
      question: "APP是否会支持安卓和苹果？",
      answer:
        "后续会进行开发安卓版本，但是ios版本会视情况而定",
    },
  ],

  footerLinks: [
    { text: '隐私政策', href: 'https://agreement-drcn.hispace.dbankcloud.cn/index.html?lang=zh&agreementId=1739950591389519872' },
    { text: '用户协议', href: '/terms' },
  ],

  feature: [
    {
      icon: '📱',
      title: '系统',
      desc: '碰一碰功能',
      status: '',
    },
    {
      icon: '📱',
      title: '系统',
      desc: '实况窗功能',
      status: '',
    },
    {
      icon: '📈',
      title: '记录',
      desc: '月/年统计分析',
      status: '延后',
    },
    {
      icon: '📒',
      title: '动作库',
      desc: '系统动作支持查看详情',
      status: '延后',
    },
  ],
};
