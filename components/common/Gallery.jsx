import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import { Link } from 'react-router-dom';

const Gallery = ({ 
  images = [], 
  showPrimaryButton = false, 
  showViewMoreButton = false,
  title = "Moments at Maggemane",
  description = "From Maggemane - India's First Certified Humane & Organic Dairy Brand. Pure milk and dairy products born from stress-free cows and ethical farming."
}) => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-4">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-6">
            {title}
          </h2>
          <p className="text-gray-600 font-primary text-lg max-w-3xl mx-auto mb-8">
            {description}
          </p>
          
          {/* Primary Button - Only show on home page */}
          {showPrimaryButton && (
            <div className="flex justify-center mb-12">
              <Link to="/visit-us">
              <PrimaryButton>Visit Tour</PrimaryButton>
              </Link>
            </div>
          )}
        </div>

        {/* Gallery Grid - Desktop (3 columns, bento style) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-4 px-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {images[0] && (
                <div className="h-[450px]">
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
              {images[1] && (
                <div className="h-[250px]">
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              {images[2] && (
                <div className="h-[200px]">
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
              {images[3] && (
                <div className="h-[500px]">
                  <img
                    src={images[3].src}
                    alt={images[3].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              {images[4] && (
                <div className="h-[480px]">
                  <img
                    src={images[4].src}
                    alt={images[4].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
              {images[5] && (
                <div className="h-[220px]">
                  <img
                    src={images[5].src}
                    alt={images[5].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Grid - Tablet (2 columns) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              {images[0] && (
                <div className="h-[300px]">
                  <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
              {images[2] && (
                <div className="h-[200px]">
                  <img
                    src={images[2].src}
                    alt={images[2].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
              {images[4] && (
                <div className="h-[250px]">
                  <img
                    src={images[4].src}
                    alt={images[4].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-4">
              {images[1] && (
                <div className="h-[200px]">
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
              {images[3] && (
                <div className="h-[300px]">
                  <img
                    src={images[3].src}
                    alt={images[3].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
              {images[5] && (
                <div className="h-[250px]">
                  <img
                    src={images[5].src}
                    alt={images[5].alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery Grid - Mobile */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {/* First row - one large image spanning 2 columns */}
            {images[0] && (
              <div className="col-span-2 h-[200px]">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            
            {/* Second row - two square images */}
            {images[1] && (
              <div className="h-[150px]">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            {images[2] && (
              <div className="h-[150px]">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            
            {/* Third row - two square images */}
            {images[3] && (
              <div className="h-[150px]">
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            {images[4] && (
              <div className="h-[150px]">
                <img
                  src={images[4].src}
                  alt={images[4].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            
            {/* Fourth row - one large image spanning 2 columns */}
            {images[5] && (
              <div className="col-span-2 h-[200px]">
                <img
                  src={images[5].src}
                  alt={images[5].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </div>

        {/* View More Button - Only show on Visit Us page */}
        {showViewMoreButton && (
          <div className="flex justify-center mt-12">
            <button className="bg-white hover:bg-[#7C4098] text-[#9B5AB3] hover:text-white border-2 border-[#7C4098] font-medium px-8 py-3 rounded-2xl transition-colors duration-200 flex items-center gap-2">
              View More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;