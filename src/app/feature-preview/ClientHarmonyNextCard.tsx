'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function HarmonyNextCard() {
  const sp = useSearchParams();
  const color = sp.get('color') || '#ffffff';
  useEffect(() => {
    document
      .getElementById('harmony-next-card')
      ?.style.setProperty('--tw-gradient-from', color);
  }, [color]);
  return <></>;
}
