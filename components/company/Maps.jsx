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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.1944764923737!2d76.08319119384943!3d12.68392528752082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5130030b72fff%3A0x6d6f407929350a20!2sMaggemane!5e1!3m2!1sen!2sin!4v1758270918247!5m2!1sen!2sin"
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