import React from 'react';

const CallToAction = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA Content */}
        <h2 className="text-3xl md:text-4xl font-bold font-secondary text-white mb-8">
          Lorem ipsum dolor sit amet consectetur
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-[#9B5AB3] px-8 py-3 rounded-xl font-primary font-medium hover:bg-gray-100 transition-colors duration-300">
            Get in touch →
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-primary font-medium hover:bg-white hover:text-[#9B5AB3] transition-colors duration-300">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;