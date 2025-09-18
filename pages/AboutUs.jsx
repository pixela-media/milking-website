import React from 'react';
import Navbar from '../components/layout/Navbar';
import Company from '../components/home/Company';
import Founder from '../components/company/Founder';
import Values from '../components/company/Values';
import Achievements from '../components/common/Achievements';
import CallToAction from '../components/common/CallToAction';
import Footer from '../components/layout/Footer';
import Video from '../components/common/Video';
import Thumbnail from '../assets/images/carousel/slide1.png';

const AboutUs = () => {
  const videoData = [
    {
      title: "Farm Tour",
      description: "Take a virtual tour of our dairy farm and see our ethical practices",
      thumbnail: Thumbnail,
      src: "https://www.youtube.com/watch?v=adzrFymkgNk",
      type: "youtube"
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Company Section */}
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <Company page='about-us' />
      </section>

      {/* Founder Section */}
      <section className="bg-white">
        <Founder />
      </section>

      {/* Values Section */}
      <section className='bg-white'>
        <Values />
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <Achievements />
      </section>

      {/* Video Section */}
      <section className="bg-white">
        <Video
          title="Guided by Ethics & Innovation"
          videos={videoData}
        />
      </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-[#7C4098] to-[#9B5AB3]">
          <CallToAction />
        </section>

        <Footer />

    </div>
  )
}

export default AboutUs
