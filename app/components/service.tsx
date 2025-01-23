"use client";

import { services } from '../constants/data';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceProps {
  cardsPerView: number;
}

const Services = ({ cardsPerView }: ServiceProps) => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const nextService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex + cardsPerView) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prevIndex) => (prevIndex - cardsPerView + services.length) % services.length);
  };

  return (
    <section id="services" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 font-poppins">Our Services</h2>
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentServiceIndex * (100 / cardsPerView)}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className={`w-full ${cardsPerView === 3 ? 'md:w-1/3' : cardsPerView === 2 ? 'sm:w-1/2' : 'w-full'} flex-shrink-0 px-2 sm:px-4 mb-8 sm:mb-0`}>
                  <div className="overflow-hidden shadow-lg h-[400px] sm:h-[450px] md:h-[500px] group relative">
                    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] transition-all duration-500 ease-in-out group-hover:h-[100px] sm:group-hover:h-[125px] md:group-hover:h-[150px]">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <div className="bg-primary p-4 sm:p-6 text-white absolute inset-x-0 bottom-0 h-[200px] transition-all duration-500 ease-in-out group-hover:h-[300px] sm:group-hover:h-[325px] md:group-hover:h-[350px]">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{service.title}</h3>
                      <div className="h-px w-12 bg-white mb-2 sm:mb-4"></div>
                      <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-4">
                        {service.subServices.map((subService, idx) => (
                          <p key={idx} className="text-sm sm:text-base md:text-lg">
                            {subService.duration} mins {subService.name}
                          </p>
                        ))}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs sm:text-sm mb-2 sm:mb-4">{service.description}</p>
                        <div className="h-px w-full bg-white mb-2 sm:mb-4"></div>
                        <div className="flex justify-between items-center">
                          <span className="text-lg sm:text-xl md:text-2xl font-bold">${service.price.toFixed(2)}</span>
                          <button className="flex items-center text-xs sm:text-sm hover:underline">
                            VIEW DETAILS <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevService}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 sm:-ml-4"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextService}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 sm:-mr-4"
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
