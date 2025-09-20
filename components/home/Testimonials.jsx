import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ranjini H K',
      position: 'Whole Cow Milk Buyer',
      rating: 5,
      text: 'As a mother, I’ve finally found milk I can trust. Milking’s Whole Cow Milk feels pure, fresh, and safe for my kids every single day.',
      avatar: '/assets/images/customer1.jpg'
    },
    {
      id: 2,
      name: 'Latha',
      position: 'Curd β (A2-rich) Buyer',
      rating: 5,
      text: 'The curd is thick, creamy, and so light on the stomach. It reminds me of the traditional homemade taste, but with assured quality.',
      avatar: '/assets/images/customer2.jpg'
    },
    {
      id: 3,
      name: 'Ranjitha K',
      position: 'Ghee Buyer',
      rating: 5,
      text: 'I use Milking Ghee for cooking and festivals — the aroma and purity make every dish feel special and wholesome',
      avatar: '/assets/images/customer3.jpg'
    },
    {
      id: 4,
      name: 'Ravikumara',
      position: 'Paneer Buyer',
      rating: 5,
      text: 'The paneer is so soft and fresh that it melts in the mouth. It cooks beautifully without releasing water, perfect for my family recipes.',
      avatar: '/assets/images/customer4.jpg'
    },
  ];


  const slidesPerView = 3; // For desktop
  const totalSlidesDesktop = Math.ceil(testimonials.length / slidesPerView);
  const totalSlidesMobile = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const isDesktop = window.innerWidth >= 1024;
      const maxIndex = isDesktop ? totalSlidesDesktop - 1 : totalSlidesMobile - 1;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const isDesktop = window.innerWidth >= 1024;
      const maxIndex = isDesktop ? totalSlidesDesktop - 1 : totalSlidesMobile - 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#9B5AB3] font-cursive text-2xl font-bold mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800">
            What our clients have to say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Desktop Carousel */}
          <div className="hidden lg:block">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlidesDesktop }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-3 gap-8 px-12 pt-2 pb-5">
                      {testimonials
                        .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                        .map((testimonial) => (
                          <div key={testimonial.id} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border border-[#E1E4ED]">
                            {/* Stars */}
                            <div className="flex justify-start mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-[#9B5AB3]" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                              ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-600 font-secondary text-sm leading-relaxed mb-6">
                              "{testimonial.text}"
                            </p>

                            {/* Customer Info */}
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-bold font-primary text-gray-800 text-sm">
                                  {testimonial.name}
                                </h4>
                                <p className="text-gray-500 font-secondary text-xs">
                                  {testimonial.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 mx-auto max-w-sm hover:shadow-2xl transition-shadow duration-300 border border-[#E1E4ED]">
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#9B5AB3]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 font-secondary text-center leading-relaxed mb-6">
                        "{testimonial.text}"
                      </p>

                      {/* Customer Info */}
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold font-primary text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 font-secondary text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Both Desktop and Mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#9B5AB3] text-white rounded-full flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 lg:right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#9B5AB3] text-white rounded-full flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator - Both Desktop and Mobile */}
        <div className="flex justify-center mt-8 space-x-2">
          {/* Desktop dots */}
          <div className="hidden lg:flex space-x-2">
            {Array.from({ length: totalSlidesDesktop }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#9B5AB3]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Mobile dots */}
          <div className="flex lg:hidden space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-[#9B5AB3]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;