import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import ProductHero from '../components/products/ProductHero';
import Benefits from '../components/products/Benefits';
import Footer from '../components/layout/Footer';
import { products } from '../assets/data/product';
import Video from '../components/common/Video';
import OurProducts from '../components/common/OurProducts';
import CallToAction from '../components/common/CallToAction';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const videoData = [
    {
      title: "Farm Tour",
      description: "Take a virtual tour of our dairy farm and see our ethical practices",
      thumbnail: "/path/to/thumbnail1.jpg",
      src: "/path/to/video1.mp4",
      type: "video"
    },
  ];

  useEffect(() => {
    const foundProduct = products.find(p => 
      p.name.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/', { replace: true });
    }
    setLoading(false);
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9B5AB3] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return null; 
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className={product.verticalBackground}>
        <ProductHero product={product} />
      </section>

      {/* Benefits Section */}
      <section>
        <Benefits/>
      </section>

      <section className="bg-white">
        <Video
          title="From Farm to You"
          videos={videoData}
        />
      </section>

      <OurProducts/>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#7C4098] to-[#9B5AB3]">
        <CallToAction />
      </section>
      
      <Footer />
    </>
  );
};

export default ProductDetails;