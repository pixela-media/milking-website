import React from 'react';
import BenefitsImage from '../../assets/images/benefit.jpg';

const Benefits = () => {
  const benefits = [
    {
      title: 'No added preservatives'
    },
    {
      title: 'Adulteration free'
    },
    {
      title: 'Free from stress hormones'
    },
    {
      title: 'No injected growth hormones'
    },
    {
      title: 'Free from antibiotics'
    },
    {
      title: 'Freeze-roaming happy cows'
    },
    {
      title: 'Raised in well-ventilated barns'
    },
    {
      title: '24/7 access to feed & clean water'
    },
    {
      title: 'No harmful fertilizers'
    },
    {
      title: 'Low somatic cell count (SCC)'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-4">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
            The Benefits of Milking Products
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Benefits Image Circle */}
              <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={BenefitsImage} 
                  alt={benefit.title}
                  className="w-16 h-16 md:w-24 md:h-24 object-cover"
                />
              </div>
              
              {/* Benefit Text */}
              <p className="text-sm md:text-base font-medium text-gray-700 leading-tight px-2">
                {benefit.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;