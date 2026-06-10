"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

const CREAM = "#f3efe7";
const ACCENT = "#e8501a";

function TeamMember({
  position,
  children,
  bobOffset = 0,
  bobAmp = 0.06,
}: {
  position: [number, number, number];
  children: React.ReactNode;
  bobOffset?: number;
  bobAmp?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.7 + bobOffset) * bobAmp;
  });
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  );
}

const neutralMaterial = (
  <meshPhysicalMaterial color={CREAM} roughness={0.55} clearcoat={0.4} clearcoatRoughness={0.4} />
);

/**
 * "The New Hire" — five matte porcelain forms drifting in loose orbit
 * (the team), with one glossy accent sphere joining them (the AI employee).
 */
export function HeroScene({ pointer }: { pointer: React.RefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.12;
    const targetX = (pointer.current?.y ?? 0) * 0.07;
    const targetZ = (pointer.current?.x ?? 0) * -0.07;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 3, delta);
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, targetZ, 3, delta);
  });

  return (
    <>
      <group ref={group} position={[0, 0.15, 0]}>
        {/* The team — matte porcelain forms */}
        <TeamMember position={[0, 0, 0]} bobOffset={0}>
          <mesh castShadow>
            <sphereGeometry args={[0.62, 64, 64]} />
            {neutralMaterial}
          </mesh>
        </TeamMember>
        <TeamMember position={[-1.05, 0.32, 0.25]} bobOffset={1.4}>
          <mesh castShadow rotation={[0.7, 0.2, 0.4]}>
            <torusGeometry args={[0.34, 0.135, 32, 96]} />
            {neutralMaterial}
          </mesh>
        </TeamMember>
        <TeamMember position={[0.95, 0.55, -0.35]} bobOffset={2.8}>
          <mesh castShadow rotation={[0.3, 0, 1.1]}>
            <capsuleGeometry args={[0.17, 0.42, 8, 24]} />
            {neutralMaterial}
          </mesh>
        </TeamMember>
        <TeamMember position={[0.65, -0.55, 0.55]} bobOffset={4.2}>
          <mesh castShadow rotation={[1.2, 0.4, 0.2]}>
            <capsuleGeometry args={[0.14, 0.34, 8, 24]} />
            {neutralMaterial}
          </mesh>
        </TeamMember>
        {/* The new hire — glossy accent sphere */}
        <TeamMember position={[-0.78, -0.42, -0.3]} bobOffset={5.5} bobAmp={0.09}>
          <mesh castShadow>
            <sphereGeometry args={[0.27, 64, 64]} />
            <meshPhysicalMaterial
              color={ACCENT}
              roughness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        </TeamMember>
      </group>

      <ContactShadows position={[0, -1.35, 0]} opacity={0.28} blur={3.2} scale={7} far={2.8} />

      <Environment resolution={256}>
        {/* soft studio rig on a light background */}
        <Lightformer intensity={2.2} position={[-3, 4, 2]} scale={[6, 4, 1]} rotation-x={-0.6} />
        <Lightformer intensity={1.1} color="#fff4ea" position={[4, 1, 1]} scale={[3, 5, 1]} rotation-y={-0.8} />
        <Lightformer intensity={0.6} position={[0, -2, -4]} scale={[8, 3, 1]} />
      </Environment>
      <ambientLight intensity={0.35} />
    </>
  );
}
