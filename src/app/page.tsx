'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import '@/lib/env';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className='bg-html h-screen w-screen bg-cover bg-center bg-no-repeat box-border'>
      <section className='h-screen'></section>
      <section className='sticky h-screen w-screen bg-blue-50'></section>
      <section className='h-screen bg-red-200'>
        <Scene />
      </section>
    </main>
  );
}
