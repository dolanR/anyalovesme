'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import '@/lib/env';

import Hero from '@/components/Hero';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0', '1 0.4'],
  });
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.5],
    [0, -50, -150, -200]
  );

  return (
    <main>
      <div>
        <motion.div
          ref={ref}
          style={{ opacity, y }}
          className='bg-html h-[calc(100vh+200px)] fixed w-screen bg-center bg-no-repeat -z-10 bg-cover'
          initial={{
            clipPath: 'polygon(50% 15%, 58% 50%, 50% 85%, 42% 50%)',
            opacity: 0,
          }}
          animate={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
            opacity: 1,
          }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
        ></motion.div>
      </div>
      <Hero />
      <section className='h-screen relative'>
        <Scene />
      </section>
    </main>
  );
}
