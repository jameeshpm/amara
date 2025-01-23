"use client";

import Image from 'next/image';
import { SLIDES } from '../constants/data';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {SLIDES.map((slide, index) => (
          <Image
            key={index}
            src={slide.src}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={slide.alt}
            fill={true}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            priority
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 font-poppins">
          Experience Relaxation
        </h2>
      </div>

      <div className="absolute bottom-5 flex justify-center w-full space-x-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
