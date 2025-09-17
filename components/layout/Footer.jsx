import React from 'react';

// Images
import MilkingLogo from '../../assets/images/milkingn_logo.png';

// Icons
import FacebookIcon from '../../assets/icons/footer_facebook_icon.svg';
import InstagramIcon from '../../assets/icons/footer_instagram_icon.svg';
import TwitterIcon from '../../assets/icons/footer_x_icon.svg';
import LinkedInIcon from '../../assets/icons/footer_linkedin_icon.svg';
import YoutubeIcon from '../../assets/icons/footer_youtube_icon.svg';
import LocationIcon from '../../assets/icons/footer_location_icon.svg';
import PhoneIcon from '../../assets/icons/footer_phone_icon.svg';
import MessageIcon from '../../assets/icons/footer_message_icon.svg';

const Footer = () => {
  return (
    <footer className="bg-[#F7F2FA] py-12 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={MilkingLogo}
                alt="Milking Logo"
                className="h-12 w-auto mb-4"
              />
            </div>
            <p className="text-gray-600 font-secondary text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
              >
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
              >
                <img
                  src={YoutubeIcon}
                  alt="YouTube"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold font-secondary text-gray-800 mb-6">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Whole Milk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Paneer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Curd
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Butter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Ghee
                </a>
              </li>
            </ul>
          </div>

          {/* Options Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold font-secondary text-gray-800 mb-6">
              Options
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Help Centre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold font-secondary text-gray-800 mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <img
                  src={LocationIcon}
                  alt="Location"
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <p className="text-gray-600 font-secondary text-sm leading-relaxed">
                  S.No: 10/6 & 11 CHIKKAMAGGE VILLAGE,
                  DODDAMAGGE POST, ARKALGUD TALUK,
                  HASSAN DIST, Hassan, Karnataka, 573142
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <img
                  src={PhoneIcon}
                  alt="Phone"
                  className="w-5 h-5 flex-shrink-0"
                />
                <a
                  href="tel:+917411437003"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  +91 7411437003
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <img
                  src={MessageIcon}
                  alt="Email"
                  className="w-5 h-5 flex-shrink-0"
                />
                <a
                  href="mailto:support@milking.org.in"
                  className="text-gray-600 font-secondary text-sm hover:text-[#9B5AB3] transition-colors duration-300"
                >
                  support@milking.org.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 font-secondary text-sm">
            © 2025 Milking. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;