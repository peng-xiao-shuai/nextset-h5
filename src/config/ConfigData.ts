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
  {
    name: '华为推送SDK（HarmonyOS(java)版）',
    purpose: '用于消息推送',
    scene: '通知：当用户收到好友通知时',
    info: '应用信息（应用基本信息）、设备信息（设备型号、操作系统、系统设置），网络信息（网络信息、运营商信息、SSID、IP地址）',
    way: 'SDK本机采集，不涉及数据共享',
    company: '华为软件技术有限公司',
    policy: 'https://developer.huawei.com/consumer/cn/doc/30101',
  },
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

export const appInfo = {
  appName: '律己',
};
