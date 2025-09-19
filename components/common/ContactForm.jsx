import React, { useState } from 'react';
import FacebookIcon from '../../assets/icons/footer_facebook_icon.svg';
import InstagramIcon from '../../assets/icons/footer_instagram_icon.svg';
import TwitterIcon from '../../assets/icons/footer_x_icon.svg';
import LinkedInIcon from '../../assets/icons/footer_linkedin_icon.svg';
import YoutubeIcon from '../../assets/icons/footer_youtube_icon.svg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxMh0gOgSKxOmWtmgbrlRxbWcqOTMpMGjsAe0iNbEwr5LQfpY_TqdIQuLeqtXTn79PK/exec';

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-6 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-4">
            We're Here to Help
          </h2>
          <p className="text-gray-600 font-primary leading-relaxed max-w-2xl mx-auto">
            Have questions about your order, delivery, or our dairy products?
            Our support team is just a call or email away.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-10">

          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h3 className="text-xl font-semibold font-secondary text-gray-800 mb-4">
                Want to reach out directly?
              </h3>
              <p className="text-gray-600 font-primary mb-4">
                We're here to answer your questions and connect with you.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#9B5AB3] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">support@milking.org.in</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#9B5AB3] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-800">+91 76183 57003</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3">Follow us on social media</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61578945691715"
                  className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
                >
                  <img
                    src={FacebookIcon}
                    alt="Facebook"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://www.instagram.com/milking.org.in/"
                  className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
                >
                  <img
                    src={InstagramIcon}
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://x.com/Milking_dairy"
                  className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
                >
                  <img
                    src={TwitterIcon}
                    alt="Twitter"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/108628770/admin/page-posts/published/"
                  className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
                >
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@Milking-org-in"
                  className="w-8 h-8 bg-[#9B5AB3] rounded flex items-center justify-center hover:bg-[#7C4098] transition-colors duration-300"
                >
                  <img
                    src={YoutubeIcon}
                    alt="YouTube"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl px-8 py-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5AB3] focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5AB3] focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9B5AB3] focus:border-transparent outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#9B5AB3] hover:bg-[#7C4098] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;