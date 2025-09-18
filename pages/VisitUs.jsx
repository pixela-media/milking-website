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
    { src: Gallery3, alt: 'Farm view 3' },
    { src: Gallery4, alt: 'Farm view 4' },
  ];

  const bottomRowImages = [
    { src: Gallery5, alt: 'Cows 1' },
    { src: Gallery6, alt: 'Cows 2' },
    { src: Gallery1, alt: 'Cows 3' },
    { src: Gallery2, alt: 'Cows 4' },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#f7f2fa]/1">
        <MaggeMane 
        topImages={topRowImages}
        bottomImages={bottomRowImages}
      />
      </section>
      <section className="bg-white">
        <Gallery
          images={galleryImages}
          showPrimaryButton={false}
          showViewMoreButton={true}
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
