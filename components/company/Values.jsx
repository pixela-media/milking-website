import React from 'react';
import ValueIcon from '../../assets/icons/f1_e2_icon.svg';
import MissionIcon from '../../assets/icons/f2_e1_icon.svg';
import VisionIcon from '../../assets/icons/f3_icon.svg';

const Values = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Our Values */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#9B5AB3] rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={ValueIcon} alt="value icon" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-secondary text-gray-800 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600 font-primary leading-relaxed">
              Stay connected with your team and make quick decisions wherever you are.
            </p>
          </div>

          {/* Our Mission */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#9B5AB3] rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={MissionIcon} alt="mission icon" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-secondary text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 font-primary leading-relaxed">
              Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.
            </p>
          </div>

          {/* Our Vision */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-[#9B5AB3] rounded-lg flex items-center justify-center mx-auto mb-4">
                <img src={VisionIcon} alt="vision icon" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-secondary text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 font-primary leading-relaxed">
              Our calendar lets you know what is happening with customer and projects so you
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Values;