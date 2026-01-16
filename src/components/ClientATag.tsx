'use client';

import { appInfo } from '@/config/ConfigData';
import Link from 'next/link';

export function ClientOnlyLink() {
  function handleClick() {
    const isPhone = /Phone/i.test(navigator.userAgent);

    if (isPhone) {
      window.webProxy.openMailbox();
    } else {
      window.open(`${appInfo.email.href}`, '_blank');
    }
  }

  return (
    <Link
      href="javascript:void(0)"
      onClick={handleClick}
      className="font-bold hover:underline"
    >
      {appInfo.email.href}
    </Link>
  );
}
