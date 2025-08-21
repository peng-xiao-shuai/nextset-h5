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

  useEffect(() => {
    const body = document.body;
    // 根据当前深浅色模式设置背景色
    if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.style.backgroundColor = '#f2f3f5';
    }
  }, [])
  return <></>;
}
