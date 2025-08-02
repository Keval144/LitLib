// components/Carousel.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

export interface Slide {
  src: StaticImageData;
  alt: string;
}

export interface CarouselProps {
  slides: Slide[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoSlide = false,
  autoSlideInterval = 10000,
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const id = setInterval(next, autoSlideInterval);
    return () => clearInterval(id);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {slides.map(({ src, alt }, idx) => (
        <div
          key={idx}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            className="object-cover"
            priority={idx === 0}
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
