'use client';

import React from 'react';
import '@/lib/env';

import Scene from '@/components/Scene';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main className='relative h-screen'>
      <Scene />
    </main>
  );
}
