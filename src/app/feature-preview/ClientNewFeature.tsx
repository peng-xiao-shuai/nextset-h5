'use client';

import { useSearchParams } from 'next/navigation';
import { VersionFeatures } from './ClientVersionInfos';
import { appInfo } from '@/config/ConfigData';
import { VersionRecords } from './constants';

export function ClientNewFeature() {
  const sp = useSearchParams();
  const version = sp.get('version') || appInfo.version;

  return (
    <div className='mb-4'>
      {version !== appInfo.version ?
        <p className="text-lg font-bold mb-2! pl-4">
          <span>V{version} 版本功能</span>&nbsp;
        </p>

        : <p className="text-lg font-bold mb-2! pl-4">
          <span>版本新功能</span>&nbsp;
          <span className='bg-amber-500 dark:bg-amber-600 text-amber-100 text-xs px-1.5 py-0.5 rounded-2xl'>V{version}</span>
        </p>
      }

      <VersionFeatures version={version as keyof typeof VersionRecords} />
    </div>
  );
}
