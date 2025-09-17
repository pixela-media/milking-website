import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productCategories, getProductsByCategory } from '../../assets/data/product';

const OurProducts = ({ 
  title = "Our Dairy Range",
  subtitle = "Products"
}) => {
  const [activeCategory, setActiveCategory] = useState('milk');
  const [displayedProducts, setDisplayedProducts] = useState(getProductsByCategory('milk'));
  const navigate = useNavigate();

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setDisplayedProducts(getProductsByCategory(categoryId));
  };

  const handleProductClick = (product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${slug}`);
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-4">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-8">
            {title}
          </h2>
          
          {/* Category Tabs - FAQ Style */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 mx-2 mb-2 font-secondary font-medium transition-colors duration-300 border-b-2 capitalize ${
                  activeCategory === category.id
                    ? 'text-[#9B5AB3] border-[#9B5AB3]'
                    : 'text-gray-600 border-transparent hover:text-[#9B5AB3]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className={`shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer ${product.horizantalBackground || ''}`}
              onClick={() => handleProductClick(product)}
            >
              <div className="p-6 md:p-8 flex flex-row items-center gap-6">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-32 md:w-50 md:h-50 object-contain drop-shadow-lg"
                    />
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl -z-10"></div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-sm">
                    {product.name}
                  </h3>
                  <p className="text-white/90 text-lg md:text-xl mb-4 font-medium">
                    {product.sizes.join(' / ')}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center md:justify-start gap-2">
                        <svg className="w-4 h-4 text-white flex-shrink-0 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white text-sm md:text-base drop-shadow-sm">
                          {feature.feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* No products message */}
        {displayedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">No Products Available</h3>
            <p className="text-gray-400">Products in this category are coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProducts;