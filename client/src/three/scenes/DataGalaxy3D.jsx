import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Line } from '@react-three/drei';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useThemeContext } from '../../theme/themeContext.jsx';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

function NetworkNodes({ primaryColor, accentColor, count = 18 }) {
  const groupRef = useRef();

  // Generate deterministic coordinates for clusters
  const nodes = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      const radius = 1.4 + (i % 3) * 0.4;
      const y = ((i % 5) - 2) * 0.45;
      list.push([
        Math.cos(theta) * radius,
        y,
        Math.sin(theta) * radius
      ]);
    }
    return list;
  }, [count]);

  // Connect adjacent nodes
  const lines = useMemo(() => {
    const linePairs = [];
    for (let i = 0; i < nodes.length; i++) {
      const nextIndex = (i + 1) % nodes.length;
      linePairs.push([nodes[i], nodes[nextIndex]]);
      if (i % 2 === 0) {
        const crossIndex = (i + 4) % nodes.length;
        linePairs.push([nodes[i], nodes[crossIndex]]);
      }
    }
    return linePairs;
  }, [nodes]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        {nodes.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[idx % 3 === 0 ? 0.12 : 0.08, 16, 16]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? primaryColor : accentColor}
              emissive={idx % 2 === 0 ? primaryColor : accentColor}
              emissiveIntensity={0.6}
              roughness={0.3}
            />
          </mesh>
        ))}

        {lines.map((pair, idx) => (
          <Line
            key={idx}
            points={pair}
            color={accentColor}
            lineWidth={1}
            transparent
            opacity={0.35}
          />
        ))}
      </Float>
    </group>
  );
}

export function DataGalaxy3D({ height = 280 }) {
  const { activeThemeTokens } = useThemeContext();
  const prefersReducedMotion = useReducedMotion();

  const primaryColor = activeThemeTokens?.colors?.primary?.main || '#2563eb';
  const accentColor = activeThemeTokens?.colors?.accent?.main || '#06b6d4';

  if (prefersReducedMotion) {
    return (
      <Box
        sx={{
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed',
          borderColor: 'divider',
          borderRadius: 3
        }}
      >
        <Box sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
          3D Visual Analytics (Motion Reduced)
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', height, position: 'relative', overflow: 'hidden' }}>
      <Suspense
        fallback={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <CircularProgress size={30} sx={{ color: primaryColor }} />
          </Box>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1} color={primaryColor} />
          <NetworkNodes primaryColor={primaryColor} accentColor={accentColor} />
        </Canvas>
      </Suspense>
    </Box>
  );
}

export default DataGalaxy3D;

