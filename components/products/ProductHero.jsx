import React from 'react';

const ProductHero = ({ product }) => {
  if (!product) return null;

  return (
    <div className="mt-10 py-16 px-4 min-h-screen ">
      <div className="max-w-7xl mx-auto">

        {/* Product Name and Description - Center Top */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-secondary text-gray-800 mb-6">
            {product.name}
          </h1>
          <p className="text-gray-600 font-primary text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {product.briefDescription}
          </p>
        </div>

        {/* Main Content Grid - Image Center with Benefits on Sides */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-20">

          {/* Left Benefits */}
          <div className="order-2 lg:order-1 space-y-8">
            {product.features.slice(0, 2).map((benefit, index) => (
              <div key={index} className="text-center lg:text-right">
                <h3 className="text-xl md:text-2xl font-bold font-secondary mb-3" style={{ color: product.textColor }}>
                  {benefit.feature}
                </h3>
                <p className="text-[#909090] font-primary text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-sm w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Benefits */}
          <div className="order-3 space-y-8">
            {product.features.slice(2).map((benefit, index) => (
              <div key={index} className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold font-secondary mb-3" style={{ color: product.textColor }}>
                  {benefit.feature}
                </h3>
                <p className="text-[#909090] font-primary text-sm md:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section - Two Columns */}
        <div className="flex flex-col lg:flex-row items-center">
        
          {/* Left Column - Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <div className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md w-full">
              <img
                src={product.imageBack}
                alt={product.name}
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>
        
          {/* Right Column - Details */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-cursive text-[#C071DD] mb-3 md:mb-4">
              Details
            </h2>
        
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-secondary text-gray-800">
                Product Description
              </h2>
              <p className="text-gray-600 font-primary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;