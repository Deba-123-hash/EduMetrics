import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import Box from '@mui/material/Box';
import { useThemeContext } from '../../theme/themeContext.jsx';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

function HologramShape({ color }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export function EmptyState3D({ size = 100 }) {
  const { activeThemeTokens } = useThemeContext();
  const prefersReducedMotion = useReducedMotion();
  const primaryColor = activeThemeTokens?.colors?.primary?.main || '#2563eb';

  if (prefersReducedMotion) {
    return (
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: '2px dashed',
          borderColor: primaryColor,
          opacity: 0.5,
          margin: '0 auto'
        }}
      />
    );
  }

  return (
    <Box sx={{ width: size, height: size, margin: '0 auto' }}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 45 }}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[3, 3, 3]} intensity={1} color={primaryColor} />
          <HologramShape color={primaryColor} />
        </Canvas>
      </Suspense>
    </Box>
  );
}

export default EmptyState3D;
