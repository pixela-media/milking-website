import Achievements from "../components/common/Achievements";
import Video from "../components/common/Video";
import Company from "../components/company/Companybg";
import Founder from "../components/company/Founder";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Company Section */}
      <section className="bg-white py-16">
        <Company />
      </section>

      {/* Founder Section */}
      <section className="bg-white py-16">
        <Founder />
      </section>

      {/* Achievements Section */}
      <section className="bg-gradient-to-b from-[#F7F2FA] to-[#FFFFFF]">
        <Achievements />
      </section>

      {/* Video Section */}
      <section className="bg-white py-16">
        <Video />
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
