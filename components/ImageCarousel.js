'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaStar, FaAward, FaPhone } from 'react-icons/fa';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(true);
      }, 100);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(true);
    }, 100);
  };

  const goToPrevious = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      setIsAnimating(true);
    }, 100);
  };

  const goToNext = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      setIsAnimating(true);
    }, 100);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
      {/* Images with Ken Burns effect */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className={`object-cover transition-transform duration-[8000ms] ${
              index === currentIndex ? 'scale-110' : 'scale-100'
            }`}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none z-[5]" />

      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-[5] px-4">
        
        {/* Top Badge */}
        <div className={`transform transition-all duration-1000 ${
          isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full shadow-2xl mb-6 backdrop-blur-sm border border-white/20">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">Established 2011</span>
            <FaAward className="text-yellow-400" />
          </div>
        </div>

        {/* Main Heading with Glass Morphism */}
        <div className={`transform transition-all duration-1000 delay-200 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-4xl">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-600 rounded-full p-4 shadow-xl">
                <FaGraduationCap className="text-4xl md:text-5xl text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-3 text-white drop-shadow-2xl">
              SICE
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-2 text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Computer Institute
              </span>
            </h2>
            <p className="text-lg md:text-xl text-center text-blue-100 font-medium">
              Rairangpur, Odisha
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                13+ Years Excellence
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                150+ Students
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                Industry Certified
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } mt-8`}>
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a
              href="tel:9776633572"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform"
            >
              <FaPhone className="mr-3 group-hover:animate-pulse" />
              Call Now
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="/enroll"
              className="group relative inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 py-4 rounded-full transition-all shadow-2xl hover:scale-105 transform"
            >
              <FaGraduationCap className="mr-3 group-hover:animate-bounce" />
              Enroll Now
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                Save ₹5000
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows with Modern Design */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all z-20 border border-white/30 hover:scale-110 transform shadow-xl group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all z-20 border border-white/30 hover:scale-110 transform shadow-xl group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Modern Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/20 shadow-xl">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'bg-white w-8 h-3' 
                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
