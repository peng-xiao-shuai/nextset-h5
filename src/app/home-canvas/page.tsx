import React, { Suspense } from 'react';
import { GenerateMetadata } from '../meta';
import ClientHomeCanvas from './ClientHomeCanvas';

export const generateMetadata = () => {
  return GenerateMetadata('/home-canvas');
};

export default async function HomeCanvasPage() {
  return (
    <section className="page-container py-0! home-canvas dark:bg-black bg-[#f1f3f5]">
      <Suspense>
        <ClientHomeCanvas></ClientHomeCanvas>
      </Suspense>
    </section>
  );
}
