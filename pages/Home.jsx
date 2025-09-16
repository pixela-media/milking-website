import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Achievements from "../components/common/Achievements";
import Company from "../components/home/Company";
import Promise from "../components/home/Promise";
import Testimonials from "../components/home/Testimonials";
import FAQs from "../components/home/FAQs";
import Gallery from "../components/common/Gallery";
import CallToAction from "../components/common/CallToAction";
import Footer from "../components/layout/Footer";

const Home = () => {
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
        <Company />
      </section>

      {/* Products Section */}
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
        <Gallery />
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