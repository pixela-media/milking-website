import React from 'react';
import FounderImage from '../../assets/images/other/founder.jpg';

const Founder = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-2">Founder</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-6">
            The Visionary Behind Milking
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-center font-primary leading-relaxed text-lg">
            Founded by Dr. M. C. Rangaswamy, a nationally awarded farmer-entrepreneur, Milking is 
            built on decades of expertise in ethical and science-led farming. His awards celebrate 
            innovation, sustainability, and leadership in Indian dairy.
          </p>
        </div>

        {/* Founder Image */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-2xl">
            <img
              src={FounderImage}
              alt="Dr. M. C. Rangaswamy receiving national award"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;