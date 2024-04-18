/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { Group } from 'three';

export default function Model(props: any) {
  const { nodes, materials } = useGLTF('/media/scene.glb');
  const { viewport } = useThree();

  const meshRef = useRef<Group>(null);

  //use mouse position to update rotation of mesh, as well as scroll position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight;
      (meshRef.current as any).rotation.x = y * 0.3;
      (meshRef.current as any).rotation.z = x * -Math.PI * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2 + 0.3, 0, -Math.PI]}>
        <group
          rotation={[0, -Math.PI, 0]}
          ref={meshRef}
          scale={Math.max(viewport.height / 450, viewport.width / 700)}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_1.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_2.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_3.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_4.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_5.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_6.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_7.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_8.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_9.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_10.geometry}
            material={materials.material0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Model_material0_0_11.geometry}
            material={materials.material0}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
