"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../layout/Loader";
import SectionTitle from "../shared/SectionTitle";

/* ── Procedural Glowing 3D Tech Globe Component ── */
const ProceduralTechGlobe = () => {
  const globeRef = useRef();
  const pointsRef = useRef();
  const ringRef = useRef();

  // Slow continuous rotation (Clean Y-axis only so ring stays in view)
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.18;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }
  });

  // Generate random glowing node points over the sphere surface
  const pointsCount = 180;
  const pointsPositions = React.useMemo(() => {
    const pos = new Float32Array(pointsCount * 3);
    const radius = 2.02;
    for (let i = 0; i < pointsCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / pointsCount);
      const theta = Math.sqrt(pointsCount * Math.PI) * phi;
      pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  return (
    <group ref={globeRef} scale={1}>
      {/* Inner Dark Solid Sphere Base */}
      <mesh>
        <sphereGeometry args={[1.95, 48, 48]} />
        <meshStandardMaterial
          color="#121216"
          roughness={0.7}
          metalness={0.3}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* Outer Glowing Wireframe Grid */}
      <mesh>
        <sphereGeometry args={[2.0, 32, 32]} />
        <meshBasicMaterial
          color="#F97316"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Orbiting Equatorial Tech Ring */}
      <mesh ref={ringRef} rotation-x={Math.PI / 3}>
        <ringGeometry args={[2.5, 2.55, 64]} />
        <meshBasicMaterial
          color="#F97316"
          side={THREE.DoubleSide}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Glowing Orbital Tech Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointsPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          color="#F97316"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>
    </group>
  );
};

/* ── Main Earth Canvas Component (Side-by-Side Large Display) ── */
const EarthCanvas = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background text-foreground relative overflow-hidden border-b border-border">
      {/* Container — Side-by-Side Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Left-Aligned Section Title */}
          <div className="lg:col-span-5 z-10">
            <SectionTitle
              title="Engineering for a Connected"
              highlightTitle="World."
              subtitle="Deploying high-performance digital applications across global cloud edge networks with sub-300ms latency, zero-trust security, and round-the-clock reliability."
              align="left"
              className="mb-0"
            />
          </div>

          {/* Right Column: 3D Canvas Globe (Large Display, Zero Clipping, Safe 3D Framing) */}
          <div className="lg:col-span-7 w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[680px] aspect-square mx-auto cursor-grab active:cursor-grabbing relative flex items-center justify-center">
            {mounted ? (
              <Canvas
                shadows
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true, antialias: true }}
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [0, 0, 6.7],
                }}
              >
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} />
                <pointLight
                  position={[-10, -10, -5]}
                  color="#F97316"
                  intensity={1.5}
                />

                <Suspense fallback={<CanvasLoader />}>
                  <Float
                    speed={1.2}
                    rotationIntensity={0.1}
                    floatIntensity={0.2}
                  >
                    <ProceduralTechGlobe />
                  </Float>
                  <OrbitControls
                    autoRotate
                    autoRotateSpeed={1.2}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 1.6}
                    minPolarAngle={Math.PI / 3}
                  />
                  <Preload all />
                </Suspense>
              </Canvas>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-orange-500/30 border-t-orange-500 animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthCanvas;
