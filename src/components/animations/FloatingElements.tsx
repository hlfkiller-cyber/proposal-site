"use client";

import React, { useEffect, useState } from 'react';

const elements = ['💖', '✨', '🌸', '❤️', '💕'];

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
      {Array.from({ length: 20 }).map((_, index) => {
        const style: React.CSSProperties = {
          left: `${Math.random() * 100}vw`,
          animation: `float ${Math.random() * 10 + 10}s linear ${Math.random() * 10}s infinite`,
          fontSize: `${Math.random() * 1.5 + 0.5}rem`,
          bottom: '-10vh',
        };
        const element = elements[Math.floor(Math.random() * elements.length)];

        return (
          <div
            key={index}
            className="absolute text-primary"
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
