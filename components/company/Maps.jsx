import React from 'react';

const Maps = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
            Find Us on Map
          </h2>
        </div>

        {/* Map Container */}
        <div className="rounded-2xl overflow-hidden shadow-xl w-5/6 mx-auto ">
          <div className="relative">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153179!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f3a5e1%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[450px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;