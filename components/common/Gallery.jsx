import React from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import Gallery1 from '../../assets/images/gallery/gallery1.png';
import Gallery2 from '../../assets/images/gallery/gallery2.png';
import Gallery3 from '../../assets/images/gallery/gallery3.png';
import Gallery4 from '../../assets/images/gallery/gallery4.jpg';
import Gallery5 from '../../assets/images/gallery/gallery5.jpg';
import Gallery6 from '../../assets/images/gallery/gallery6.png';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: Gallery1,
      alt: 'Cows in Modern Shelter',
    },
    {
      id: 2,
      src: Gallery2,
      alt: 'Farm Aerial View',
    },
    {
      id: 3,
      src: Gallery3,
      alt: 'Quality Testing Process',
    },
    {
      id: 4,
      src: Gallery4,
      alt: 'Certification Ceremony',
    },
    {
      id: 5,
      src: Gallery5,
      alt: 'Cows Resting Comfortably',
    },
    {
      id: 6,
      src: Gallery6,
      alt: 'Modern Milking Facility',
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-4">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-6">
            Moments at Maggemane
          </h2>
          <p className="text-gray-600 font-primary text-lg max-w-3xl mx-auto mb-8">
            From Maggemane – India's First Certified Humane & Organic Dairy Brand. Pure milk and 
            dairy products born from stress-free cows and ethical farming.
          </p>
          <div className="flex justify-center mb-12">
            <PrimaryButton>Visit Tour</PrimaryButton>
          </div>
        </div>

        {/* Gallery Grid - Desktop (3 columns, bento style) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-4 px-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="h-[450px]">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="h-[250px]">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="h-[200px]">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="h-[500px]">
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <div className="h-[480px]">
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="h-[220px]">
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Tablet (2 columns) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="h-[300px]">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="h-[200px]">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="h-[250px]">
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-[200px]">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="h-[300px]">
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="h-[250px]">
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid - Mobile */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {/* First row - one large image spanning 2 columns */}
            <div className="col-span-2 h-[200px]">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Second row - two square images */}
            <div className="h-[150px]">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="h-[150px]">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Third row - two square images */}
            <div className="h-[150px]">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="h-[150px]">
              <img
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Fourth row - one large image spanning 2 columns */}
            <div className="col-span-2 h-[200px]">
              <img
                src={galleryImages[5].src}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;