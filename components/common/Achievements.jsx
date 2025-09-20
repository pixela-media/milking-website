import React from 'react';
import CertifiedImage from '../../assets/images/cmyk_logo.png';
import JaivikImage from '../../assets/images/jaivik_bharat_logo.png';
import PCIImage from '../../assets/images/pgs_organic_logo.png';
import ISOImage from '../../assets/images/roco_logo.png';

const Achievements = () => {
  const achievements = [
    {
      icon: CertifiedImage,
      title: 'CERTIFIED HUMANE',
      subtitle: "India's First Certified Humane Dairy Brand"
    },
    {
      icon: JaivikImage,
      title: 'JAIVIK BHARAT',
      subtitle: 'Jaivik Bharat Certified Organic Dairy'
    },
    {
      icon:  PCIImage,
      title: 'PCI RECOGNIZED',
      subtitle: 'PGS-India Recognized Ethical Farming'
    },
    {
      icon: ISOImage,
      title: 'ISO CERTIFIED',
      subtitle: 'Certified by FSSC Standards'
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-2xl font-bold mb-2">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
            Setting New Standards in Indian Dairy
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container */}
              <div className="w-50 h-40 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={achievement.icon}
                  alt={achievement.title}
                  className="w-40 h-40 object-contain"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold font-secondary text-gray-800 mb-2 px-10">
                {achievement.subtitle}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
