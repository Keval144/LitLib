"use client";

import React, { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(99, 102, 241, 0.12)", // #6366F1 with transparency
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleHover = (visible: boolean) => {
    setOpacity(visible ? 0.6 : 0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className={`
        relative rounded-2xl group text-black
        bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]
        hover:border-[#6366F1]/30 hover:border-indigo-500
        border-2 border-gray-700/70
        dark:text-slate-100
        overflow-hidden p-8 
        transition-all duration-300 ease-out
        hover:shadow-lg 
        hover:-translate-y-1
        ${className}
      `}
    >
      {/* Main spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />

      {/* Subtle border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;
