import React from 'react'
import Navbar from '../components/layout/Navbar'
import Gallery from '../components/common/Gallery';

//gallery images
import Gallery1 from '../assets/images/gallery/gallery1.png';
import Gallery2 from '../assets/images/gallery/gallery2.png';
import Gallery3 from '../assets/images/gallery/gallery3.png';
import Gallery4 from '../assets/images/gallery/gallery4.jpg';
import Gallery5 from '../assets/images/gallery/gallery5.jpg';
import Gallery6 from '../assets/images/gallery/gallery6.png';
import Company1 from '../assets/images/other/company1.jpg';
import Company2 from '../assets/images/other/company2.jpg';
import Company3 from '../assets/images/other/company3.jpg';
import Company4 from '../assets/images/other/company4.png';
import Company5 from '../assets/images/other/company5.png';
import Company6 from '../assets/images/other/company6.png';
import Company7 from '../assets/images/other/company7.png';

import Video from '../components/common/Video';
import ContactForm from '../components/common/ContactForm';
import Footer from '../components/layout/Footer';
import MaggeMane from '../components/company/MaggeMane';

const VisitUs = () => {
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

  const videoData = [
    {
      title: "Farm Tour",
      description: "Take a virtual tour of our dairy farm and see our ethical practices",
      src: "https://www.youtube.com/watch?v=OwGZY4K6IRI",
      type: "youtube"
    },
    {
      title: "Farm Tour",
      description: "Take a virtual tour of our dairy farm and see our ethical practices",
      src: "https://www.youtube.com/watch?v=adzrFymkgNk",
      type: "youtube"
    },
    {
      title: "Farm Tour",
      description: "Take a virtual tour of our dairy farm and see our ethical practices",
      src: "https://www.youtube.com/watch?v=Qc3_exn_F08",
      type: "youtube"
    }
  ];

  const topRowImages = [
    { src: Gallery1, alt: 'Farm view 1' },
    { src: Gallery2, alt: 'Farm view 2' },
    { src: Company1, alt: 'Farm view 3' },
    { src: Gallery4, alt: 'Farm view 4' },
    { src: Company2, alt: 'Farm view 4' },
    { src: Company4, alt: 'Farm view 4' },
    { src: Company6, alt: 'Farm view 4' },
  ];

  const bottomRowImages = [
    { src: Gallery5, alt: 'Cows 1' },
    { src: Gallery6, alt: 'Cows 2' },
    { src: Gallery3, alt: 'Cows 3' },
    { src: Gallery2, alt: 'Cows 4' },
    { src: Company3, alt: 'Cows 4' },
    { src: Company5, alt: 'Cows 4' },
    { src: Company7, alt: 'Cows 4' },
  ];

  return (
    <div className='px-0 w-full'>
      <Navbar />
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1 w-full">
        <MaggeMane 
        topImages={topRowImages}
        bottomImages={bottomRowImages}
      />
      </section>
      <section className="bg-white">
        <Gallery
          images={galleryImages}
          showPrimaryButton={false}
          showViewMoreButton={false}
        />
      </section>
      <section className="bg-white">
        <Video
          title="From Farm to You"
          videos={videoData}
        />
      </section>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default VisitUs
