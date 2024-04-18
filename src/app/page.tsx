'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0', '1 0.4'],
  });
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5],
    [0, -50, -120, -200, -260, -300]
  );

  return (
    <main>
      <div className='w-screen h-screen relative '>
        <motion.div
          ref={ref}
          style={{ opacity, y }}
          className='bg-html fixed h-[150vh] w-screen bg-center bg-no-repeat bg-cover'
        ></motion.div>
      </div>
      <div className='overflow-hidden'>
        <motion.div className='text-white text-[35vh] absolute left-1/2 top-[20vh] font-["Playfair"] italic tracking-tighter -translate-x-1/2 scale-y-150 -skew-x-12'>
          Anya
        </motion.div>
      </div>
      <div className='overflow-hidden'>
        <motion.div className='text-white text-[35vh] absolute left-1/2 top-2/3 font-["Playfair"] italic tracking-tighter -translate-x-1/2 scale-y-150 -skew-x-12'>
          Kalimouline
        </motion.div>
      </div>
      <section className='h-screen relative '></section>
      <section className='h-screen relative '>
        <Scene />
      </section>
    </main>
  );
}
