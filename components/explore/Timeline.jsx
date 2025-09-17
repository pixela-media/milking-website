import React from 'react';

const Timeline = ({ 
  title = "Why We Made History:",
  subtitle = "First in India to Earn the Certified Humane®",
  timelineItems = []
}) => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-2">
            {title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold font-secondary text-gray-800">
            {subtitle}
          </h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* Timeline Items */}
          <div className="space-y-6 md:space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start gap-2 md:gap-8">
                {/* Timeline Number Circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#9B5AB3] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg md:text-xl">
                      {item.number || index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-lg px-2 pt-0 md:px-6 md:pt-2">
                  <h4 className="text-lg md:text-xl font-semibold font-secondary text-gray-800 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-primary text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;