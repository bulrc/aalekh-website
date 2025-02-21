import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';

import { BERKSHIRE_SWASH } from '@/app/fonts';
import { cn } from '@/utils/cn';

// Sample images - replace these URLs with your actual book fest images
const images = [
  '/what-is-aalekh/what-is-aalekh-1.webp',
  '/what-is-aalekh/what-is-aalekh-2.webp',
  '/what-is-aalekh/what-is-aalekh-3.webp',
  '/what-is-aalekh/what-is-aalekh-4.webp',
  '/what-is-aalekh/what-is-aalekh-5.webp',
  '/what-is-aalekh/what-is-aalekh-6.webp',
  '/what-is-aalekh/what-is-aalekh-7.webp',
  '/what-is-aalekh/what-is-aalekh-8.webp',
  '/what-is-aalekh/what-is-aalekh-9.webp',
  '/what-is-aalekh/what-is-aalekh-10.webp',
  '/what-is-aalekh/what-is-aalekh-11.webp'
];

const ImageGallery = () => {
  // Initialize isMobile to a safe default (e.g., false) since window is not available during SSR.
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update isMobile state on client-side after the component mounts.
  useEffect(() => {
    // Set the initial value based on the current window width.
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagesPerView = isMobile ? 1 : 3;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerView >= images.length ? 0 : prevIndex + imagesPerView
    );
  }, [imagesPerView]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - imagesPerView < 0 ? images.length - imagesPerView : prevIndex - imagesPerView
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [imagesPerView, nextSlide]);

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span
          className={cn(
            BERKSHIRE_SWASH.className,
            `text-4xl text-center mb-10 sm:text-5xl block font-bold text-primary`
          )}
        >
          Moment of Memories
        </span>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${isMobile ? 'min-w-full' : 'min-w-[33.333%]'} px-2`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                    <Image
                      src={image}
                      height={1000}
                      width={1980}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-6 md:mt-8 gap-2">
          {Array.from({ length: Math.ceil(images.length / imagesPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * imagesPerView)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / imagesPerView) === index 
                  ? 'bg-gray-800 w-4' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
