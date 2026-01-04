"use client";

import React, { useEffect, useState } from 'react';

const Confetti = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 150 }).map((_, i) => {
        const colors = ['#D8BFD8', '#E6E6FA', 'hsl(var(--primary))', '#fcd34d'];
        const style: React.CSSProperties = {
          left: `${Math.random() * 100}%`,
          animation: `confetti-fall ${Math.random() * 2 + 1.5}s ease-out ${Math.random() * 0.5}s forwards`,
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          width: `${Math.random() * 8 + 6}px`,
          height: `${Math.random() * 8 + 6}px`,
          top: '-10%',
        };
        return <div key={i} className="absolute" style={style} />;
      })}
    </div>
  );
};

export default Confetti;
