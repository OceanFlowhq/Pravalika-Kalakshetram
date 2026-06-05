// src/components/FloatingParticles.jsx
import { useEffect, useRef } from 'react';

export default function FloatingParticles({ count = 18, color = 'rgba(212,160,23,', style = {} }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 15 + 12,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      ...style,
    }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: `${color}${p.opacity})`,
            animation: `particle-drift ${p.duration}s ${p.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
