import { appInfo, personalInfo, sdk } from '@/config/ConfigData';
import React from 'react';
import { GenerateMetadata } from '../meta';
import { ClientOnlyLink } from '@/components/ClientATag';

export const generateMetadata = () => {
  return GenerateMetadata('/privacy');
};
export const dynamic = 'force-static';
export default function PrivacyPage() {
  return (
    <section className="page-container">
      <h1>隐私政策</h1>
      <ol className="mb-4">
        <li>更新日期：2025 年 06 月 17 日</li>
        <li>生效日期：2025 年 06 月 17 日</li>
        <li>应用名称：{appInfo.appName}</li>
        <li>开发者：个人开发者</li>
        <li>
          联系邮箱：
          <ClientOnlyLink />
        </li>
      </ol>

      <h2>隐私保护指引</h2>
      <p>
        我们为实现特定功能而收集您的必要信息，在征得您的明示同意后，我们会收集您的下列个人信息【设备标识信息，设备基本信息，操作系统信息】，以便为您提供更好的服务体验。我们采用业界标准的安全技术保护您的个人信息。
      </p>

      <h2>我们收集的信息</h2>
      <h3>个人信息收集说明</h3>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-2xl border text-sm">
          <thead>
            <tr>
              <th className="border p-2 w-40">信息类型/业务场景</th>
              <th className="border p-2 w-40">收集目的</th>
              <th className="border p-2 w-40">收集方式</th>
              <th className="border p-2 w-20">是否必需</th>
              <th className="border p-2 w-32">拒绝提供的影响</th>
            </tr>
          </thead>
          <tbody>
            {personalInfo.map((item) => (
              <tr key={item.type}>
                <td className="border p-2 text-center">{item.type}</td>
                <td className="border p-2 ">{item.purpose}</td>
                <td className="border p-2 text-center">{item.way}</td>
                <td className="border p-2 text-center">{item.isRequired}</td>
                <td className="border p-2 ">{item.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>设备信息收集</h3>
      <p>为保障应用正常运行和提供技术支持，我们可能收集以下设备信息：</p>
      <ul>
        <li>设备型号、操作系统版本</li>
        <li>应用版本信息</li>
        <li>设备唯一标识符（用于数据同步和账号安全）</li>
        <li>应用使用统计信息（用于性能优化）</li>
      </ul>
      <p>
        <strong>
          重要说明：我们收集的设备信息仅用于技术支持、故障排查和产品优化，不会用于用户画像分析或商业推广。
        </strong>
      </p>

      <h2>信息使用</h2>
      <h3>使用目的</h3>
      <p>我们会在以下情况下使用您的个人信息：</p>
      <ul>
        <li>提供应用核心功能服务</li>
        <li>进行产品功能优化和错误修复</li>
        <li>响应您的客服咨询和技术支持请求</li>
        <li>产品推广和商业化运营（在获得您同意的前提下）</li>
        <li>与合作伙伴共享以提供更好的服务体验</li>
        <li>遵守适用的法律法规要求</li>
      </ul>

      <h2>免责声明</h2>
      <ul>
        <li>
          我们将尽最大努力保护您的信息安全，但不对因不可抗力、第三方攻击等导致的数据丢失或泄露承担责任
        </li>
        <li>
          用户自行输入的训练数据、身体数据等信息的准确性和合法性由用户自行负责
        </li>
        <li>因用户违反相关法律法规或本政策导致的任何损失，由用户自行承担</li>
      </ul>

      <h2>信息存储与安全</h2>
      <h3>存储方式</h3>
      <ul>
        <li>您的个人数据存储在可靠的第三方云服务提供商的服务器上</li>
        <li>我们采用加密传输和存储等安全措施保护您的数据</li>
        <li>数据存储期限：账号注销后30天内删除，或按法律要求保留</li>
      </ul>
      <h3>数据安全</h3>
      <p>
        我们采用合理的安全措施保护您的信息，但互联网环境存在固有风险，我们无法保证绝对安全。
      </p>

      <h2>信息共享与披露</h2>
      <h3>共享原则</h3>
      <p>为了提供更好的服务体验，我们可能会在以下情况下共享您的个人信息：</p>
      <ul>
        <li>获得您的明确授权同意</li>
        <li>与合作伙伴共享以提供增值服务（如华为运动健康等健康管理平台）</li>
        <li>法律法规要求或政府部门要求</li>
        <li>为维护应用安全和其他用户合法权益的必要情况</li>
      </ul>
      <h3>第三方合作伙伴</h3>
      <p>
        根据业务发展需要，在某些特定的业务场景下，为了提供业务处理能力、响应速度或其他方面的考虑，我们可能会使用有能力的第三方服务商提供的软件工具开发包（简称SDK）来为您提供服务，这些SDK可能会收集和使用您的个人信息。
        <strong>
          这些SDK服务商收集和处理信息等行为遵守其自身的隐私条款，而不适用于本《隐私政策》。为了最大程度保障您的信息安全，我们建议您在使用任何第三方SDK服务前先行查看其隐私条款。请注意，第三方SDK可能由于版本升级、策略调整等原因导致其个人信息处理目的、范围、方式发生变化，请以其公示的官方说明为准。
        </strong>
      </p>
      <p>
        <span>具体请查阅文末附录</span>
        <a href="#sdk" style={{ display: 'ruby' }}>
          《个人信息共享清单（律己）》
        </a>
      </p>

      <h2>业务变更</h2>
      <p>
        如发生合并、收购、资产转让等业务变更，我们会提前30天通知您。您可以选择：
      </p>
      <ul>
        <li>继续使用服务并接受新的数据处理方</li>
        <li>在业务变更生效前注销账号并删除数据</li>
      </ul>

      <h2>您的权利</h2>
      <h3>数据管理权利</h3>
      <p>您享有以下权利：</p>
      <ul>
        <li>访问权：查看我们收集的您的个人信息</li>
        <li>更正权：要求更正不准确的个人信息</li>
        <li>删除权：要求删除您的个人信息</li>
        <li>账号注销权：随时注销账号并删除相关数据</li>
      </ul>
      <h3>权利行使方式</h3>
      <ul>
        <li>账号注销：通过【我的-设置-注销账号】注销账号并删除相关数据</li>
        <li>
          邮件联系：发送邮件至 <ClientOnlyLink /> 说明具体需求
        </li>
      </ul>
      <p>
        处理时限：我们将在收到您的请求后15个工作日内处理，复杂情况可延长至30天。
      </p>

      <h2>特殊说明</h2>
      <h3>服务发展说明</h3>
      <p>随着产品发展和用户需求变化，我们可能会：</p>
      <ul>
        <li>与健身相关的平台或服务进行合作</li>
        <li>提供基于匿名化数据的分析服务</li>
        <li>根据用户需求推荐相关产品或服务</li>
        <li>进行必要的业务调整或重组</li>
      </ul>
      <p>我们承诺在涉及您个人信息的重要变更时会提前通知您并征求您的意见。</p>

      <h3>服务变更</h3>
      <p>由于技术升级、业务发展需要，如遇以下情况，我们可能调整或停止服务：</p>
      <ul>
        <li>技术升级或维护需要</li>
        <li>法律法规变化要求</li>
        <li>业务模式调整</li>
        <li>不可抗力因素影响</li>
      </ul>
      <p>我们会提前30天通知您任何重大变更。</p>

      <h2>未成年人保护</h2>
      <ul>
        <li>未满18周岁的用户需在监护人同意下使用本应用</li>
        <li>我们不会主动收集未成年人的个人信息</li>
        <li>如发现误收集未成年人信息，我们会及时删除</li>
      </ul>

      <h2>政策更新</h2>
      <p>
        本隐私政策可能因法律法规变化或功能更新而修订。重大变更将通过应用内通知等方式告知您，继续使用即视为同意更新后的政策。
      </p>

      <h2>联系我们</h2>
      <ol className="list-disc pl-6 mb-2">
        <li>
          邮箱：
          <ClientOnlyLink />
        </li>
        <li>我们承诺在15个工作日内回复您的咨询</li>
      </ol>

      <p>本隐私政策的解释权归开发者所有，在法律允许范围内享有最终解释权。</p>

      <h2 id="sdk">附录：个人信息共享清单</h2>
      <h3>（一）第三方SDK目录</h3>
      <p>
        为保障律己相关功能的实现与应用的稳定运行，我们会接入由第三方提供的软件开发包（SDK）实现前述目的。接入的相关第三方SDK已在目录中列明，您可通过目录中提供的链接查看第三方数据处理和保护规则。请注意，第三方SDK可能由于版本升级、策略调整等原因导致其个人信息处理目的、范围、方式发生变化，具体请以其公示的官方说明为准。
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-5xl border text-sm">
          <thead>
            <tr>
              <th className="border p-2 text-center">SDK服务</th>
              <th className="border p-2">使用目的</th>
              <th className="border p-2">使用场景</th>
              <th className="border p-2">收集个人信息类型</th>
              <th className="border p-2">收集方式</th>
              <th className="border p-2">第三方公司名称</th>
              <th className="border p-2">隐私政策</th>
            </tr>
          </thead>
          <tbody>
            {sdk.map((item) => (
              <tr key={item.name}>
                <td className="border p-2 text-center w-32">{item.name}</td>
                <td className="border p-2 w-28">{item.purpose}</td>
                <td className="border p-2 w-28">{item.scene}</td>
                <td className="border p-2 w-40">{item.info}</td>
                <td className="border p-2">{item.way}</td>
                <td className="border p-2 w-32">{item.company}</td>
                <td className="border p-2 w-20">
                  <a
                    href={item.policy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:underline"
                  >
                    点击查看
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
