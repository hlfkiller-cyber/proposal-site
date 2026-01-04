"use client";

import React, { useEffect, useState } from 'react';

const elements = ['💖', '✨', '🌸', '❤️', '💕', '🌹', '💌'];

const FloatingElements = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 25 }).map((_, index) => {
        const style: React.CSSProperties = {
          left: `${Math.random() * 100}vw`,
          animation: `float ${Math.random() * 15 + 10}s linear ${Math.random() * 15}s infinite`,
          fontSize: `${Math.random() * 1.5 + 0.5}rem`,
          bottom: '-10vh',
          color: `hsl(var(--primary) / ${Math.random() * 0.5 + 0.3})`,
        };
        const element = elements[Math.floor(Math.random() * elements.length)];

        return (
          <div
            key={index}
            className="absolute"
            style={style}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
