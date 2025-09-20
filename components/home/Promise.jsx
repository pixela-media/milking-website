import React from 'react';
import P1 from '../../assets/icons/p1_icon.svg';
import P2 from '../../assets/icons/p2_icon.svg';
import P3 from '../../assets/icons/p3_icon.svg';
import P4 from '../../assets/icons/p4_icon.svg';

const Promise = () => {
  const features = [
    {
      icon: P1,
      title: 'Humane Certified Farming',
      description: 'Animals are raised with freedom to roam, shelter, and care from trained handlers—treated gently with no cages or crates. Certified humane standards also ban antibiotics/growth hormones and ensure space for natural behaviors.'
    },
    {
      icon: P2,
      title: 'Organic & Chemical Free',
      description: 'No synthetic pesticides, fertilizers, or antibiotics are used—animals eat organic feed, and milk is free from chemical residues. This preserves natural nutrients like omega-3s, antioxidants, and leads to cleaner, safer dairy.'
    },
    {
      icon: P3,
      title: '100% Pure Milk',
      description: 'Our milk is unadulterated—no artificial additives, hormones, or antibiotics. From healthy, stress-free cows, ensuring nutrient integrity and taste in every drop. Purity you can trust.'
    },
    {
      icon: P4,
      title: 'Farmer-Led',
      description: 'Every part of the process from animal care to feed and milking is overseen by farmers who live by these ethical standards. Local stewardship ensures transparency, responsibility, and consistency.'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-4">Promise</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800">
            Why Choose Milking
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon Container */}
              <div className="w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-36 h-36 object-contain"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold font-secondary text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-primary text-sm leading-relaxed px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promise;