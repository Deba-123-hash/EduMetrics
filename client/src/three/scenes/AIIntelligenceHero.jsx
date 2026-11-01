import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Points, PointMaterial } from '@react-three/drei';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useThemeContext } from '../../theme/themeContext.jsx';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

// Internal rotating AI core sphere
function NeuralCore({ primaryColor, accentColor }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
      ringRef.current.rotation.x -= delta * 0.1;
    }
  });

  return (
    <group>
      {/* Floating inner intelligence sphere */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 3]} />
          <meshStandardMaterial
            color={primaryColor}
            emissive={primaryColor}
            emissiveIntensity={0.4}
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Central glowing core */}
        <Sphere args={[0.7, 32, 32]}>
          <meshStandardMaterial
            color={accentColor}
            emissive={accentColor}
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>

        {/* Orbital telemetry ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.2, 0.03, 16, 100]} />
          <meshStandardMaterial
            color={accentColor}
            emissive={accentColor}
            emissiveIntensity={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Surrounding floating data particles
function DataParticleCloud({ color, count = 250 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// Fallback for static/reduced-motion environments
function StaticOrbFallback({ primaryColor, accentColor }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, ${accentColor}, ${primaryColor} 60%, transparent 80%)`,
          boxShadow: `0 0 50px ${primaryColor}`,
          filter: 'blur(2px)',
          opacity: 0.85
        }}
      />
    </Box>
  );
}

export function AIIntelligenceHero({ height = '100%', interactive = true }) {
  const { activeThemeTokens } = useThemeContext();
  const prefersReducedMotion = useReducedMotion();

  const primaryColor = activeThemeTokens?.colors?.primary?.main || '#38bdf8';
  const accentColor = activeThemeTokens?.colors?.accent?.main || '#06b6d4';

  if (prefersReducedMotion) {
    return <StaticOrbFallback primaryColor={primaryColor} accentColor={accentColor} />;
  }

  return (
    <Box
      sx={{
        width: '100%',
        height,
        position: 'relative',
        overflow: 'hidden',
        pointerEvents: interactive ? 'auto' : 'none'
      }}
    >
      <Suspense
        fallback={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <CircularProgress size={36} sx={{ color: primaryColor }} />
          </Box>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color={accentColor} />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color={primaryColor} />

          <NeuralCore primaryColor={primaryColor} accentColor={accentColor} />
          <DataParticleCloud color={accentColor} count={220} />
        </Canvas>
      </Suspense>
    </Box>
  );
}

export default AIIntelligenceHero;
