import { sdk } from '@/config/ConfigData';
import React from 'react';
import { GenerateMetadata } from '../meta';

export const generateMetadata = () => {
  return GenerateMetadata('/third-party');
};

export default function ThirdPartyPage() {
  return (
    <section className="page-container">
      <h1>第三方 SDK 列表</h1>
      <p>
        为了提供业务处理能力、响应速度或其他方面的考虑，我们会使用第三方服务商提供的软件工具开发包（简称SDK）来为您提供服务。我们会对
        SDK
        或其他类似的应用程序进行严格的安全检测，并要求合作伙伴采取严格的措施来保护您的个人信息。在满足新的服务需求及业务功能变更时，我们可能会调整我们接入的第三方
        SDK，并及时在本说明中向您公开说明接入第三方 SDK
        的最新情况。请注意，第三方 SDK
        可能因为版本升级、策略调整等原因导致数据类型存在一些变化，请以您当前使用的应用集成的
        SDK 版本及其公示的官方说明为准。目前本应用接入的第三方 SDK 如下：
      </p>
      {sdk.map((item) => (
        <div key={item.policy}>
          <h2>{item.name}</h2>
          <p>
            <strong>使用目的：</strong>
            {item.purpose}
          </p>
          <p>
            <strong>使用场景：</strong>
            {item.scene}
          </p>
          <p className="break-all">
            <strong>收集个人信息类型：</strong>
            {item.info}
          </p>
          <p className="break-all">
            <strong>收集方式：</strong>
            {item.way}
          </p>
          <p className="break-all">
            <strong>第三方公司名称：</strong>
            {item.company}
          </p>
          <p className="break-all">
            <strong>隐私政策：</strong>
            <a
              href={item.policy}
              style={{
                display: 'ruby',
              }}
            >
              {item.policy}
            </a>
          </p>
        </div>
      ))}
    </section>
  );
}
