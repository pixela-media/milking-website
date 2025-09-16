import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import Company1 from '../../assets/images/other/company1.jpg';
import Company2 from '../../assets/images/other/company2.jpg';
import Company3 from '../../assets/images/other/company3.jpg';

const Company = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
            Company Background
          </h2>
          <div className="flex justify-center mb-8">
            <PrimaryButton className='font-primary px-8'>View More</PrimaryButton>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-baseline">
          {/* Left Image */}
          <div className="md:col-span-1">
            <img
              src={Company1}
              alt="Dairy Farm"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Center Image */}
          <div className="md:col-span-1">
            <img
              src={Company2}
              alt="Team"
              className="w-full h-64 md:h-60 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Image */}
          <div className="md:col-span-1">
            <img
              src={Company3}
              alt="Facility"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;