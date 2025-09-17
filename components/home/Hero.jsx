import React, { useState, useEffect } from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import Slide1 from '../../assets/images/carousel/slide1.png';
import { useLocation } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const slides = [
    {
      image: Slide1,
      title: 'Milking is rewriting India\'s dairy story.',
      subtitle: 'India\'s First Certified Humane Dairy Brand committed to revolutionizing dairy farming with ethical practices and premium quality.'
    },
    {
      image: Slide1,
      title: 'Pure Quality, Ethical Practices',
      subtitle: 'From farm to table, we ensure the highest standards of quality and animal welfare in every drop of milk we produce.'
    },
    {
      image: Slide1,
      title: 'Sustainable Dairy Farming',
      subtitle: 'Leading the way in sustainable and humane dairy farming practices for a better tomorrow.'
    },
    {
      image: Slide1,
      title: 'Premium Dairy Products',
      subtitle: 'Experience the difference with our range of premium dairy products crafted with care and precision.'
    },
    {
      image: Slide1,
      title: 'Innovation in Dairy',
      subtitle: 'Combining traditional values with modern technology to deliver the finest dairy experience.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center left-5 md:left-20">
        <div className="text-start text-white px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold font-secondary mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl font-cursive mb-8 max-w-3xl">
            {slides[currentSlide].subtitle}
          </p>
          <PrimaryButton size="large" onClick={() => scrollToSection('products')}>
              Explore Now
          </PrimaryButton>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;