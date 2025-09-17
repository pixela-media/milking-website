import React from 'react';
import '../../index.css'; 

const MaggeMane = ({ 
  topImages = [], 
  bottomImages = [],
  title = "Experience",
  subtitle = "Maggemane Up Close",
  description = "Lorem ipsum dolor sit amet consectetur adipiscing eliusmod monlla sit phasellus mollis sit aliquam sit nullam neque."
}) => {
  // Duplicate arrays for seamless infinite scroll
  const topImagesExtended = [...topImages, ...topImages];
  const bottomImagesExtended = [...bottomImages, ...bottomImages];

  return (
    <div className="mt-10 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-secondary text-gray-800 mb-2">
            {title}
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
            {subtitle}
          </h2>
          <p className="text-gray-600 font-primary text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Image Carousels Container */}
        <div className="relative w-full">
          {/* Top Carousel - Moving Right to Left (Slower) */}
          <div className="relative mb-4 overflow-hidden">
            <div className="flex animate-scroll-left-slow">
              {topImagesExtended.map((image, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 w-64 h-40 mx-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Carousel - Moving Left to Right (Faster) */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right-fast">
              {bottomImagesExtended.map((image, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 w-64 h-40 mx-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt || `Gallery image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaggeMane;