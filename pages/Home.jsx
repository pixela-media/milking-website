import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Achievements from "../components/common/Achievements";
import Company from "../components/home/Company";
import OurProducts from "../components/common/OurProducts";
import Promise from "../components/home/Promise";
import Testimonials from "../components/home/Testimonials";
import FAQs from "../components/home/FAQs";
import Gallery from "../components/common/Gallery";
import CallToAction from "../components/common/CallToAction";
import Footer from "../components/layout/Footer";

//gallery images
import Gallery1 from '../assets/images/gallery/gallery1.png';
import Gallery2 from '../assets/images/gallery/gallery2.png';
import Gallery3 from '../assets/images/gallery/gallery3.png';
import Gallery4 from '../assets/images/gallery/gallery4.jpg';
import Gallery5 from '../assets/images/gallery/gallery5.jpg';
import Gallery6 from '../assets/images/gallery/gallery6.png';

const Home = () => {
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
    <>
      <Navbar />

      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <Achievements />
      </section>

      {/* Company Section */}
      <section className="bg-white">
        <Company page="home" />
      </section>

      {/* Products Section */}
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <OurProducts />
      </section>

      {/* Promise Section */}
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <Promise />
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <FAQs />
      </section>

      {/* Gallery Section */}
      <section className="bg-white">
        <Gallery
          images={galleryImages}
          showPrimaryButton={true}
          showViewMoreButton={false}
        />
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#7C4098] to-[#9B5AB3]">
        <CallToAction />
      </section>

      <Footer />
    </>
  );
};

export default Home;