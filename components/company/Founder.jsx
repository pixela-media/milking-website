import React from "react";
import founderImg from "../../assets/images/other/DOCTORATE .JPG";
import ValuesIcon from "../../assets/icons/f2_e1_icon.svg";
import MissionIcon from "../../assets/icons/f1_e2_icon.svg";
import VisionIcon from "../../assets/icons/f3_e3_icon.svg";

const Founder = () => {
  const highlights = [
    {
      icon: ValuesIcon,
      title: "Our Values",
      desc: "To set new benchmarks in animal welfare and milk purity, making ethical dairy the standard across India.",
    },
    {
      icon: MissionIcon,
      title: "Our Mission",
      desc: "To nurture cows with dignity, empower farmers with knowledge, and deliver pure, safe, and trusted dairy to every home.",
    },
    {
      icon: VisionIcon,
      title: "Our Vision",
      desc: "Compassion, transparency, and sustainability guide every step — from our farms to your family’s table.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto text-center px-4">
      {/* Section Header */}
      <h4 className="text-[#9B5AB3] font-cursive font-extrabold text-2xl mb-2">
        Founder
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-6">
        The Visionary Behind Milking
      </h2>
      <p className="text-gray-600 font-primary leading-relaxed max-w-3xl mx-auto mb-12">
        Founded by Dr. M. C. Rangaswamy, a nationally awarded farmer-entrepreneur,
        Milking is built on decades of expertise in ethical and science-led farming.
        His awards celebrate innovation, sustainability, and leadership in Indian dairy.
      </p>

      {/* Founder Image */}
      <div className="flex justify-center mb-12">
        <img
          src={founderImg}
          alt="Founder"
          className="rounded-xl shadow-lg w-full md:w-3/4"
        />
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 font-primary">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founder;
