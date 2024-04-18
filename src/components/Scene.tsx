'use client';
import { Canvas } from '@react-three/fiber';
import React from 'react';

import Model from '@/components/Model';

export default function Scene() {
  return (
    <Canvas>
      <Model />
    </Canvas>
  );
}
